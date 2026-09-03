import { NextResponse } from "next/server";
import { z } from "zod";
import { getLeadPool } from "@/lib/db";
import { cookies } from "next/headers";

const statusValues = ["new", "contacted", "qualified", "converted", "lost"] as const;
const updateSchema = z.object({
  id: z.coerce.number().int().positive(),
  status: z.enum(statusValues).optional(),
  notes: z.string().max(5000).optional(),
  followUpAt: z.string().datetime().nullable().optional(),
});

async function isAuthorized() {
  const expected = process.env.LEADS_ADMIN_TOKEN;
  if (!expected) return false;

  const cookieStore = await cookies();
  const provided = cookieStore.get("cybelinx_leads_session")?.value;
  return Boolean(provided && provided === expected);
}

export async function GET(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const search = url.searchParams.get("search")?.trim() || "";
  const status = url.searchParams.get("status")?.trim() || "";
  const interest = url.searchParams.get("interest")?.trim() || "";
  const values: string[] = [];
  const filters: string[] = [];

  if (search) {
    values.push(`%${search}%`);
    filters.push(`(name ILIKE $${values.length} OR email ILIKE $${values.length} OR company ILIKE $${values.length})`);
  }
  if (status && statusValues.includes(status as (typeof statusValues)[number])) {
    values.push(status);
    filters.push(`status = $${values.length}`);
  }
  if (interest) {
    values.push(interest);
    filters.push(`interest = $${values.length}`);
  }

  const where = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
  const pool = getLeadPool();
  const result = await pool.query(
    `SELECT id, name, email, company, interest, message, source, medium, campaign,
            landing_page, status, notes, follow_up_at, created_at, updated_at
     FROM leads ${where} ORDER BY created_at DESC LIMIT 250`,
    values
  );

  return NextResponse.json({ leads: result.rows });
}

export async function PATCH(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = updateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead update." }, { status: 400 });
  }

  const { id, status, notes, followUpAt } = parsed.data;
  if (status === undefined && notes === undefined && followUpAt === undefined) {
    return NextResponse.json({ error: "No changes provided." }, { status: 400 });
  }

  const pool = getLeadPool();
  const result = await pool.query(
    `UPDATE leads
     SET status = COALESCE($2, status),
         notes = COALESCE($3, notes),
         follow_up_at = CASE WHEN $4::boolean THEN $5::timestamptz ELSE follow_up_at END,
         updated_at = NOW()
     WHERE id = $1
     RETURNING id, status, notes, follow_up_at, updated_at`,
    [id, status || null, notes ?? null, followUpAt !== undefined, followUpAt || null]
  );

  if (!result.rowCount) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  return NextResponse.json({ lead: result.rows[0] });
}

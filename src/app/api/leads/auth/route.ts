import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";

const loginSchema = z.object({ token: z.string().min(1).max(500) });

export async function POST(request: Request) {
  const expected = process.env.LEADS_ADMIN_TOKEN;
  const parsed = loginSchema.safeParse(await request.json());

  if (!expected || !parsed.success || parsed.data.token !== expected) {
    return NextResponse.json({ error: "Invalid admin token." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("cybelinx_leads_session", expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("cybelinx_leads_session");
  return NextResponse.json({ success: true });
}

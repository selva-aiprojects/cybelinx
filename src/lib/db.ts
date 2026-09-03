import { Pool } from "pg";

const globalForDb = globalThis as unknown as { leadPool?: Pool };

export function getLeadPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!globalForDb.leadPool) {
    globalForDb.leadPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 1,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 10000,
      ssl: { rejectUnauthorized: false },
    });
  }

  return globalForDb.leadPool;
}

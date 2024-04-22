import { sql } from "@vercel/postgres"

export default async function handler(req, res) {
  try {
    const entries = await sql`SELECT * FROM Entries;`
    res.status(200).json({ entries: entries.rows })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

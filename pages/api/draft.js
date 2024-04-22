import { sql } from "@vercel/postgres"

export default async function handler(req, res) {
  const query = await sql`SELECT * FROM Picks;`
  const draft = query.rows
  const data = draft.slice().reverse()
  res.status(200).json(data)
}

import { sql } from "@vercel/postgres"

export default async function handler(req, res) {
  try {
    const contacts = await sql`SELECT * FROM Contacts;`
    res.status(200).json({ contacts: contacts.rows })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

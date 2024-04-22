import { sql } from "@vercel/postgres"
import players2024 from "./players"

const YEAR = "2024"

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const data = req.body // Assuming the content-type is application/json
    const { idxs, name } = data

    const entry = []
    for (var i = 0; i < 32; i++) {
      const idx = idxs[i].idx
      const player = players2024[idx]
      entry.push(player)
    }

    const obj = {
      name,
      draft: YEAR,
      entry,
    }

    await sql`INSERT INTO Entries (Name, Draft, Picks) VALUES (${obj.name}, ${obj.draft}, ${JSON.stringify(obj.entry)});`

    // Sending a response back to the client
    res.status(200).json({ status: "Success", submitted: data, entry })
  } else {
    // Handles any requests that aren't POST
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

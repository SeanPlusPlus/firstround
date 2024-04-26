const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

const YEAR = "2024"

const picks = [
  { rank: 1, name: "Caleb Williams", college: "USC", position: "QB" },
]

async function main() {
  const len = picks.length

  const query = await sql`SELECT * FROM Picks;`
  const rows = query.rows.length

  if (len - 1 !== rows) {
    console.log("Rows and picks do not match")
    return
  }

  const data = picks[len - 1]
  const selected = len
  const result =
    await sql`INSERT INTO Picks (Year, Selected, Data) VALUES (${YEAR}, ${selected}, ${JSON.stringify(data)});`
  console.log(result)
}

main()

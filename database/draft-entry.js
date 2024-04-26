const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

const YEAR = "2024"

const picks = [
  { rank: 1, name: "Caleb Williams", college: "USC", position: "QB" },
  { rank: 2, name: "Jayden Daniels", college: "LSU", position: "QB" },
  { rank: 5, name: "Drake Maye", college: "North Carolina", position: "QB" },
  {
    rank: 3,
    name: "Marvin Harrison Jr.",
    college: "Ohio State",
    position: "WR",
  },
  { rank: 9, name: "Joe Alt", college: "Notre Dame", position: "OT" },
  { rank: 4, name: "Malik Nabers", college: "LSU", position: "WR" },
  { rank: 11, name: "JC Latham", college: "Alabama", position: "OT" },
  {
    rank: 50,
    name: "Michael Penix Jr.",
    college: "Washington",
    position: "QB",
  },
  { rank: 6, name: "Rome Odunze", college: "Washington", position: "WR" },
  { rank: 17, name: "J.J. McCarthy", college: "Michigan", position: "QB" },
  {
    rank: 14,
    name: "Olumuyiwa Fashanu",
    college: "Penn State",
    position: "OT",
  },
  { rank: 40, name: "Bo Nix", college: "Oregon", position: "QB" },
  { rank: 7, name: "Brock Bowers", college: "Georgia", position: "TE" },
  { rank: 15, name: "Taliese Fuaga", college: "Oregon State", position: "OT" },
  { rank: 12, name: "Laiatu Latu", college: "UCLA", position: "EDGE" },
  { rank: 16, name: "Byron Murphy II", college: "Texas", position: "DT" },
  { rank: 8, name: "Dallas Turner", college: "Alabama", position: "EDGE" },
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

const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const entries = await sql`DROP TABLE Entries;`
  console.log(entries)

  const picks = await sql`DROP TABLE Picks;`
  console.log(picks)
}

main()

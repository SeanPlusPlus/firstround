const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const id = ""
  const result = await sql`DELETE FROM Entries WHERE id=${id};`
  console.log(result)
}

main()

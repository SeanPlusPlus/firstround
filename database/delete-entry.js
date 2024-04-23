const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const id = "6669e711-4052-4d33-a779-3580023e1c10"
  const result = await sql`DELETE FROM Entries WHERE id=${id};`
  console.log(result)
}

main()

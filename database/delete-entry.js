const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const id = "06af137f-1e1c-490c-a5f2-e991cf64eb16"
  const result = await sql`DELETE FROM Entries WHERE id=${id};`
  console.log(result)
}

main()

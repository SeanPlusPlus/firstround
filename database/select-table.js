const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const result = await sql`Select * from Contacts;`
  console.log(result.rows)
}

main()

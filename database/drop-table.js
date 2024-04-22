const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const result = await sql`DROP TABLE Contacts;`
  console.log(result)
}

main()

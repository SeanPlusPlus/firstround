const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const result = await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
  console.log(result)
}

main()

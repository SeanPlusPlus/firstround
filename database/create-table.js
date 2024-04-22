const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const result =
    await sql`CREATE TABLE Contacts ( Name varchar(255), City varchar(255) );`
  console.log(result)
}

main()

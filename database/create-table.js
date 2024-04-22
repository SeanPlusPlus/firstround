const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const result =
    await sql`CREATE TABLE Contacts ( Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), created_at timestamp default current_timestamp, Name varchar(255), City varchar(255), Hobbies JSONB );`
  console.log(result)
}

main()

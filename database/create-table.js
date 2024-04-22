const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const entries =
    await sql`CREATE TABLE Entries ( Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), created_at timestamp default current_timestamp, Name varchar(255), Draft varchar(255), Picks JSONB );`
  console.log(entries)

  const picks =
    await sql`CREATE TABLE Picks ( Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), Year varchar(255), Selected INT, Data JSONB );`
  console.log(picks)
}

main()

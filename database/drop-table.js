const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const result = await sql`DROP TABLE Pets;`
  console.log(result)
}

main()

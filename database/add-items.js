const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

async function main() {
  const name = "Dude"
  const city = "Stoked"
  try {
    const result =
      await sql`INSERT INTO Contacts (Name, City) VALUES (${name}, ${city});`

    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

main()

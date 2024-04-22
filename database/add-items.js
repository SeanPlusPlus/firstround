const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

function main() {
  const contacts = [
    {
      name: "Hello",
      city: "World",
    },
    {
      name: "Foo",
      city: "Bar",
    },
    {
      name: "Dude",
      city: "Stoked",
    },
  ]

  const insert = async (obj) => {
    const result =
      await sql`INSERT INTO Contacts (Name, City) VALUES (${obj.name}, ${obj.city});`
    return result
  }

  const insertObjects = async () => {
    const promises = contacts.map((contact) => insert(contact))
    const result = await Promise.all(promises)
    console.log(result)
  }

  insertObjects()
}

main()

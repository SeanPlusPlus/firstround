const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

function main() {
  const contacts = [
    {
      name: "Hello",
      city: "World",
      hobbies: [{ name: "cycling" }, { name: "poker" }],
    },
    {
      name: "Foo",
      city: "Bar",
      hobbies: [{ name: "hacking" }, { name: "yoga" }],
    },
    {
      name: "Dude",
      city: "Stoked",
      hobbies: [{ name: "running" }, { name: "history" }],
    },
  ]

  const insert = async (obj) => {
    const result =
      await sql`INSERT INTO Contacts (Name, City, Hobbies) VALUES (${obj.name}, ${obj.city}, ${JSON.stringify(obj.hobbies)});`
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

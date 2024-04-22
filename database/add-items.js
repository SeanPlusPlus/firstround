const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

function main() {
  const contacts = [
    {
      name: "Hello World",
      city: "Los Angeles",
      hobbies: [{ name: "cycling" }, { name: "poker" }],
    },
    {
      name: "Foo Bar",
      city: "New York",
      hobbies: [{ name: "hacking" }, { name: "yoga" }],
    },
    {
      name: "Dude Stoked",
      city: "San Francisco",
      hobbies: [{ name: "running" }, { name: "history" }],
    },
  ]

  const insert = async (obj) => {
    try {
      const result =
        await sql`INSERT INTO Contacts (Name, City, Hobbies) VALUES (${obj.name}, ${obj.city}, ${JSON.stringify(obj.hobbies)});`
      return result
    } catch (e) {
      return e
    }
  }

  const insertObjects = async () => {
    const promises = contacts.map((contact) => insert(contact))
    const result = await Promise.all(promises)
    console.log(result)
  }

  insertObjects()
}

main()

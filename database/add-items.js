const { sql } = require("@vercel/postgres")
require("dotenv").config({ path: ".env.development.local" })

function main() {
  const contacts = [
    {
      name: "Hello World",
      picks: [{ name: "cycling" }, { name: "poker" }],
    },
    {
      name: "Foo Bar",
      picks: [{ name: "hacking" }, { name: "yoga" }],
    },
    {
      name: "Dude Stoked",
      picks: [{ name: "running" }, { name: "history" }],
    },
  ]

  const insert = async (obj) => {
    try {
      const result =
        await sql`INSERT INTO Entries (Name, Draft, Picks) VALUES (${obj.name}, 2024, ${JSON.stringify(obj.picks)});`
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

const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

function main() {
  const entries = [
    {
      name: "Hello World",
      picks: [
        { rank: 2, name: "Jayden Daniels", college: "LSU", position: "QB" },
        { rank: 7, name: "Brock Bowers", college: "Georgia", position: "TE" },
        { rank: 1, name: "Caleb Williams", college: "USC", position: "QB" },
        {
          rank: 3,
          name: "Marvin Harrison Jr.",
          college: "Ohio State",
          position: "WR",
        },
        { rank: 4, name: "Malik Nabers", college: "LSU", position: "WR" },
        {
          rank: 5,
          name: "Drake Maye",
          college: "North Carolina",
          position: "QB",
        },
        { rank: 6, name: "Rome Odunze", college: "Washington", position: "WR" },
      ],
    },
    {
      name: "Foo Bar",
      picks: [
        { rank: 1, name: "Caleb Williams", college: "USC", position: "QB" },
        { rank: 2, name: "Jayden Daniels", college: "LSU", position: "QB" },
        {
          rank: 3,
          name: "Marvin Harrison Jr.",
          college: "Ohio State",
          position: "WR",
        },
        { rank: 4, name: "Malik Nabers", college: "LSU", position: "WR" },
        {
          rank: 5,
          name: "Drake Maye",
          college: "North Carolina",
          position: "QB",
        },
        { rank: 6, name: "Rome Odunze", college: "Washington", position: "WR" },
        { rank: 7, name: "Brock Bowers", college: "Georgia", position: "TE" },
      ],
    },
    {
      name: "Dude Stoked",
      picks: [
        { rank: 1, name: "Caleb Williams", college: "USC", position: "QB" },
        { rank: 2, name: "Jayden Daniels", college: "LSU", position: "QB" },
        {
          rank: 5,
          name: "Drake Maye",
          college: "North Carolina",
          position: "QB",
        },
        { rank: 4, name: "Malik Nabers", college: "LSU", position: "WR" },
        {
          rank: 3,
          name: "Marvin Harrison Jr.",
          college: "Ohio State",
          position: "WR",
        },
        { rank: 6, name: "Rome Odunze", college: "Washington", position: "WR" },
        { rank: 7, name: "Brock Bowers", college: "Georgia", position: "TE" },
      ],
    },
    {
      name: "Mega Tron",
      picks: [
        { rank: 1, name: "Caleb Williams", college: "USC", position: "QB" },
        { rank: 2, name: "Jayden Daniels", college: "LSU", position: "QB" },
        {
          rank: 17,
          name: "J.J. McCarthy",
          college: "Michigan",
          position: "QB",
        },
        { rank: 4, name: "Malik Nabers", college: "LSU", position: "WR" },
        {
          rank: 3,
          name: "Marvin Harrison Jr.",
          college: "Ohio State",
          position: "WR",
        },
        { rank: 6, name: "Rome Odunze", college: "Washington", position: "WR" },
        {
          rank: 8,
          name: "Dallas Turner",
          college: "Alabama",
          position: "EDGE",
        },
      ],
    },
    {
      name: "Julius Cesar",
      picks: [
        {
          rank: 5,
          name: "Drake Maye",
          college: "North Carolina",
          position: "QB",
        },
        { rank: 20, name: "Brian Thomas Jr.", college: "LSU", position: "WR" },
        { rank: 21, name: "Adonai Mitchell", college: "Texas", position: "WR" },
        {
          rank: 22,
          name: "Jared Verse",
          college: "Florida State",
          position: "EDGE",
        },
        {
          rank: 3,
          name: "Marvin Harrison Jr.",
          college: "Ohio State",
          position: "WR",
        },
        { rank: 28, name: "Graham Barton", college: "Duke", position: "C" },
        {
          rank: 29,
          name: "Darius Robinson",
          college: "Missouri",
          position: "EDGE",
        },
      ],
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
    const promises = entries.map((entry) => insert(entry))
    const result = await Promise.all(promises)
    console.log(result)
  }

  insertObjects()
}

main()

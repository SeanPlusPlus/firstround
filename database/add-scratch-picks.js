const { sql } = require("@vercel/postgres")

require("dotenv").config({ path: ".env.development.local" })

function main() {
  const entries = [
    {
      name: "Scratch",
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
        {
          rank: 8,
          name: "Dallas Turner",
          college: "Alabama",
          position: "EDGE",
        },
        { rank: 9, name: "Joe Alt", college: "Notre Dame", position: "OT" },
        {
          rank: 10,
          name: "Troy Fautanu",
          college: "Washington",
          position: "OT",
        },
        { rank: 11, name: "JC Latham", college: "Alabama", position: "OT" },
        { rank: 12, name: "Laiatu Latu", college: "UCLA", position: "EDGE" },
        {
          rank: 13,
          name: "Quinyon Mitchell",
          college: "Toledo",
          position: "CB",
        },
        {
          rank: 14,
          name: "Olumuyiwa Fashanu",
          college: "Penn State",
          position: "OT",
        },
        {
          rank: 15,
          name: "Taliese Fuaga",
          college: "Oregon State",
          position: "OT",
        },
        { rank: 16, name: "Byron Murphy II", college: "Texas", position: "DT" },
        {
          rank: 17,
          name: "J.J. McCarthy",
          college: "Michigan",
          position: "QB",
        },
        {
          rank: 18,
          name: "Terrion Arnold",
          college: "Alabama",
          position: "CB",
        },
        {
          rank: 19,
          name: "Chop Robinson",
          college: "Penn State",
          position: "EDGE",
        },
        { rank: 20, name: "Brian Thomas Jr.", college: "LSU", position: "WR" },
        { rank: 21, name: "Adonai Mitchell", college: "Texas", position: "WR" },
        {
          rank: 22,
          name: "Jared Verse",
          college: "Florida State",
          position: "EDGE",
        },
        { rank: 23, name: "Cooper DeJean", college: "Iowa", position: "CB" },
        { rank: 24, name: "Tyler Guyton", college: "Oklahoma", position: "OT" },
        { rank: 25, name: "Nate Wiggins", college: "Clemson", position: "CB" },
        { rank: 26, name: "Amarius Mims", college: "Georgia", position: "OT" },
        {
          rank: 27,
          name: "Jer'Zhan Newton",
          college: "Illinois",
          position: "DT",
        },
        { rank: 28, name: "Graham Barton", college: "Duke", position: "C" },
        {
          rank: 29,
          name: "Darius Robinson",
          college: "Missouri",
          position: "EDGE",
        },
        {
          rank: 30,
          name: "Xavier Legette",
          college: "South Carolina",
          position: "WR",
        },
        {
          rank: 31,
          name: "Kool-Aid McKinstry",
          college: "Alabama",
          position: "CB",
        },
        {
          rank: 32,
          name: "Ennis Rakestraw Jr.",
          college: "Missouri",
          position: "CB",
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

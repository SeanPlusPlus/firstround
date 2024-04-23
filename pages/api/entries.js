import _orderBy from "lodash/orderBy"
import { sql } from "@vercel/postgres"

const TOTAL = 32
const PENALTY = 50

export default async function handler(req, res) {
  try {
    const query = await sql`SELECT * FROM Picks;`
    const draft = query.rows.map((row) => row)
    const entries = await sql`SELECT * FROM Entries;`

    if (!entries) {
      res.status(200).json({ entries: [] })
      return
    }

    const results = entries.rows.map((r) => {
      const scores = r.picks.map((p, idx) => {
        const drafted = draft.find((d) => d.data.name === p.name)
        const predicted = idx + 1
        const selected = drafted ? drafted.selected : null
        const score = selected ? getScore(selected, predicted) : null
        return {
          ...p,
          score,
          selected,
        }
      })

      const score = scores.reduce((acc, cur) => {
        return acc + (typeof cur.score === "number" ? cur.score : 0)
      }, 0)

      const pending = scores.filter((s) => s.score === null).length

      return {
        ...r,
        scores,
        pending,
        score,
      }
    })
    res
      .status(200)
      .json({ entries: _orderBy(results, ["score", "name"], ["asc", "asc"]) })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const getScore = (selected, predicted) => {
  const abs = Math.abs(selected - predicted)
  const score = Math.pow(abs, 2)
  return score
}

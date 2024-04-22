import _orderBy from "lodash/orderBy"
import players2024 from "./players"
import { sql } from "@vercel/postgres"

const CURRENT_ROUND = 5
const TOTAL = 7
const PENALTY = 1024

export default async function handler(req, res) {
  try {
    const draft = players2024.slice(0, CURRENT_ROUND)
    const entries = await sql`SELECT * FROM Entries;`
    const results = entries.rows.map((r) => {
      const scores = r.picks.map((p, idx) => {
        const i = draft.findIndex((d) => d.name === p.name)
        const drafted = i === -1 ? null : i + 1
        const score = getScore(i, idx, draft.length)
        i === -1 ? null : Math.pow(Math.abs(i - idx), 2)
        return {
          ...p,
          drafted,
          score,
        }
      })

      const score = scores.reduce((acc, cur) => {
        return acc + (typeof cur.score === "number" ? cur.score : 0)
      }, 0)

      return {
        ...r,
        scores,
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

const getScore = (i, idx, totalPicksCompleted) => {
  console.log(totalPicksCompleted)
  if (totalPicksCompleted === TOTAL) {
    // draft is complete and this player was not picked in the 1st round
    if (i === -1) {
      return PENALTY
    }
  }

  const score = i === -1 ? null : Math.pow(Math.abs(i - idx), 2)
  return score
}

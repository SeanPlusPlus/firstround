import players2024 from "./players"

const CURRENT_ROUND = 5
const TOTAL = 7

export default async function handler(req, res) {
  const draft = players2024.slice(0, CURRENT_ROUND)
  res.status(200).json(draft)
}

import players2024 from "./players"

const CURRENT_ROUND = 5

export default async function handler(req, res) {
  const draft = players2024.slice(0, CURRENT_ROUND)
  const data = draft
    .slice()
    .reverse()
    .map((el, i) => ({ ...el, selected: draft.length - i }))
  res.status(200).json(data)
}

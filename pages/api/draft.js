import _shuffle from "lodash/shuffle"
import players2024 from "./players"

export default async function handler(req, res) {
  const draft = players2024.slice(0, 7)
  res.status(200).json(draft)
}

import players2024 from "./players"

export default async function handler(req, res) {
  res.status(200).json(players2024)
}

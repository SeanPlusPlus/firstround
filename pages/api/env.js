import players2024 from "./players"

export default async function handler(req, res) {
  const env = getEnv()
  res.status(200).json({ env })
}

const getEnv = () => {
  return process.env.NODE_ENV
}

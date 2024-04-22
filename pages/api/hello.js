import { put } from "@vercel/blob"

export default async function handler(req, res) {
  const { url } = await put("articles/blob.txt", "Hello World! 1", {
    access: "public",
  })
  res.status(200).json({ url })
}

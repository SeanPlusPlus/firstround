import players2024 from "./players"

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const data = req.body // Assuming the content-type is application/json
    console.log("data")
    console.log(data)

    const entry = []
    for (var i = 0; i < 32; i++) {
      const idx = data[i].idx
      const player = players2024[idx]
      entry.push(player)
    }

    // You can perform operations with the data here, like database operations or validations

    // Sending a response back to the client
    res.status(200).json({ status: "Success", submitted: data, entry })
  } else {
    // Handles any requests that aren't POST
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

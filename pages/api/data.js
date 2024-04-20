import _shuffle from "lodash/shuffle"

const countries = [
  {
    rank: 1,
    text: "China",
  },
  {
    rank: 2,
    text: "India",
  },
  {
    rank: 3,
    text: "United States",
  },
  {
    rank: 4,
    text: "Indonesia",
  },
  {
    rank: 5,
    text: "Pakistan",
  },
  {
    rank: 6,
    text: "Brazil",
  },
  {
    rank: 7,
    text: "Nigeria",
  },
  {
    rank: 8,
    text: "Bangladesh",
  },
  {
    rank: 9,
    text: "Russia",
  },
  {
    rank: 10,
    text: "Mexico",
  },
  {
    rank: 11,
    text: "Japan",
  },
  {
    rank: 12,
    text: "Ethiopia",
  },
  {
    rank: 13,
    text: "Philippines",
  },
  {
    rank: 14,
    text: "Egypt",
  },
  {
    rank: 15,
    text: "Vietnam",
  },
]

export default async function handler(req, res) {
  const data = _shuffle(countries).map((el, idx) => {
    return {
      ...el,
      id: idx + 1,
    }
  })
  res.status(200).json(data)
}

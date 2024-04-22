import { useCallback, useState, useEffect } from "react"
import update from "immutability-helper"
import axios from "axios"
import _orderBy from "lodash/orderBy"

import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import { Card } from "./Card"

const style = {
  width: "100%",
  maxWidth: "700px",
}

export const Container = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/data")
      const data = response.data
      setCards(data)
    }

    fetchData()
  }, [])

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.name}
        index={index}
        id={card.name}
        name={card.name}
        college={card.college}
        position={card.position}
        moveCard={moveCard}
      />
    )
  }, [])

  const handleReview = () => {
    setCards(cards.map((c, i) => ({ ...c, order: i + 1 })))
    setShow(true)
  }

  const handleSubmit = async () => {
    const idxs = cards.map((c) => ({ idx: c.rank - 1 }))

    setShow(false)

    // POST idxs
    const url = "/api/entry"
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const response = await axios.post(url, idxs, config)
    console.log(response.data)
  }

  const Review = (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your picks</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>College</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {cards
              .filter((c, idx) => idx < 32)
              .map((card, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{card.name}</td>
                  <td>{card.college}</td>
                  <td>{card.position}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      {cards.length > 0 && (
        <div className="submit">
          <Button onClick={handleReview} variant="secondary" size="lg">
            Review and Submit
          </Button>
        </div>
      )}
      {Review}
    </>
  )
}

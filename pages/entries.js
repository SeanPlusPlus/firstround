import { useState, useEffect } from "react"
import Head from "next/head"
import Navigation from "./Navigation"
import axios from "axios"

import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export default function Entries() {
  const [items, setItems] = useState([])
  const [draft, setDraft] = useState([])
  const [show, setShow] = useState(false)
  const [entry, setEntry] = useState({})

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await axios.get("/api/entries")
      const data = response.data
      setItems(data.entries)
    }
    const fetchDraft = async () => {
      const response = await axios.get("/api/draft")
      const data = response.data
      setDraft(data)
    }

    fetchEntries()
    fetchDraft()
  }, [])

  const displayEntry = (idx) => {
    console.log(idx, items[idx])
    setEntry(items[idx])
    setShow(true)
  }

  const handleClose = () => setShow(false)

  const Info = (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{entry.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>College</th>
              <th>Position</th>
              <th>Drafted</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {entry.scores &&
              entry.scores.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.college}</td>
                  <td>{entry.position}</td>
                  <td>{entry.drafted}</td>
                  <td>
                    <strong>
                      <code>{entry.score}</code>
                    </strong>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <Head>
        <title>First Round</title>
        <meta name="description" content="First Round" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container>
        <div className="grid-main">
          <div>
            <h2>Entries</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i, index) => (
                  <tr key={index} onClick={() => displayEntry(index)}>
                    <td>{i.name}</td>
                    <td>
                      <strong>
                        <code>{i.score}</code>
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div>
            <h2>Draft 2024</h2>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>College</th>
                  <th>Posoition</th>
                </tr>
              </thead>
              <tbody>
                {draft.map((d, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{d.name}</td>
                    <td>{d.college}</td>
                    <td>{d.position}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      {Info}
    </>
  )
}

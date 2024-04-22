import { useState, useEffect } from "react"
import Head from "next/head"
import axios from "axios"
import Navigation from "./Navigation"

import ToastContainer from "react-bootstrap/ToastContainer"
import Toast from "react-bootstrap/Toast"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import dayjs from "dayjs"
import LoadingSpinner from "./LoadingSpinner"

const TOTAL = 32

export default function Entries() {
  const [items, setItems] = useState([])
  const [draft, setDraft] = useState([])
  const [show, setShow] = useState(false)
  const [entry, setEntry] = useState({})
  const [updated, setUpdated] = useState(null)
  const [showToast, setShowToast] = useState(true)

  useEffect(() => {
    function getSelected() {
      return draft.length
    }

    const fetchEntries = async () => {
      const response = await axios.get("/api/entries")
      const data = response.data
      setItems(data.entries)
    }
    const fetchDraft = async (len) => {
      const response = await axios.get("/api/draft")
      const data = response.data
      console.log(dayjs().format(), getSelected(), data.length)

      if (getSelected() !== data.length) {
        setDraft(data)
        setShowToast(true)
        setUpdated(dayjs().format("h:mm:ss A"))
      }
    }

    fetchEntries()
    fetchDraft()

    const interval = setInterval(() => {
      fetchEntries()
      fetchDraft()
    }, 3000)
    return () => clearInterval(interval)
  }, [draft])

  const toggleToast = () => setShowToast(false)

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
              <th className="college-header">College</th>
              <th className="position-header">Position</th>
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
                  <td className="college">{entry.college}</td>
                  <td className="position">{entry.position}</td>
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

  const Alert = (
    <ToastContainer
      position={"bottom-end"}
      className="p-3"
      style={{ zIndex: 1 }}
    >
      <Toast show={showToast && draft.length > 0} onClose={toggleToast}>
        <Toast.Header>
          <strong className="me-auto">Updated</strong>
          <small>{updated}</small>
        </Toast.Header>
        <Toast.Body>
          <div className="grid-pick">
            <div># {draft.length > 0 && draft[0].selected}</div>
            <div>{draft.length > 0 && draft[0].data.name}</div>
            <div>{draft.length > 0 && draft[0].data.college}</div>
            <div>{draft.length > 0 && draft[0].data.position}</div>
          </div>
        </Toast.Body>
      </Toast>
    </ToastContainer>
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
        {items.length > 0 ? (
          <>
            <div className="grid-main">
              <div>
                <h2>Entries</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      {draft.length < TOTAL && <th>Pending</th>}
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((i, index) => (
                      <tr key={index} onClick={() => displayEntry(index)}>
                        <td>{index + 1}</td>
                        <td>{i.name}</td>
                        {draft.length < TOTAL && <td>{i.pending}</td>}
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
                        <td>{d.selected}</td>
                        <td>{d.data.name}</td>
                        <td>{d.data.college}</td>
                        <td>{d.data.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
        {Alert}
      </Container>
      {Info}
    </>
  )
}

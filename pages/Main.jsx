import { useState } from "react"
import { DndProvider } from "react-dnd"
import useSSRBackend from "../hooks/useSSRBackend"

import List from "./List"
import HowTo from "./HowTo"

import isClosed from "../utils/closed"

import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export default function Main() {
  const Backend = useSSRBackend()
  const [show, setShow] = useState(false)

  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  }

  const handleClose = () => setShow(false)

  if (isClosed) {
    return (
      <main>
        <h1>Closed</h1>
        <p>The draft has started and no more entries are accpeted</p>
      </main>
    )
  }

  const Info = (
    <Modal show={show} onHide={handleClose} size="lg">
      <HowTo />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <main>
        <h1>2024 NFL Draft First Round</h1>
        <Alert variant={"info"}>
          <span role="img" aria-label="hand waving">
            👋
          </span>{" "}
          Make sure to review the{" "}
          <Alert.Link onClick={handleShow}>How to Play</Alert.Link> before
          getting started with your entry
        </Alert>
        <DndProvider backend={Backend}>
          <List />
        </DndProvider>
      </main>
      {Info}
    </>
  )
}

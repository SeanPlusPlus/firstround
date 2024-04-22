import { useState } from "react"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import HowTo from "./HowTo"

function Navigation() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">First Round</Navbar.Brand>
          <Nav>
            <Nav.Link href="/entries">Entries</Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button onClick={handleShow} variant="secondary">
                How it works
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {Info}
    </>
  )
}

export default Navigation

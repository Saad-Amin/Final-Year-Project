import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ConfirmBox(props) {
  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {props.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Delete</Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ConfirmBox
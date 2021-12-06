import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import './CheckOutModal.css';

const CheckOutModal = (props) => {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Purchase order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Thank you for buying in Arivaci &amp; Co, {props.data.name}!</h3>
                    <p>We've received your order and will proceed to process it. In the next 48hs you will receive an email from us with you ship code.</p>
                    <p className="orderDataP"> Your order ID is: "{props.id}" and the final price is: ${props.total}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CheckOutModal

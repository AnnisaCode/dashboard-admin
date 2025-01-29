import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const InputModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name" />
                    </Form.Group>
                    <Form.Group controlId="formCustomerName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter customer name" />
                    </Form.Group>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select">
                            <option>Pending</option>
                            <option>Completed</option>
                            <option>Shipped</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InputModal;

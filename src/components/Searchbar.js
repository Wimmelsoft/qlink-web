import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function Searchbar() {

    return (
            <Form>
                <Form.Group controlId="search">
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Enter your keyword..." size="xl" />
                        </Col>
                    </Form.Row>
                </Form.Group>
            </Form>
    )

}
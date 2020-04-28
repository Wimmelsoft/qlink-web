import React, { setState } from 'react';
import Form from 'react-bootstrap/Form';
export default function Searchbar() {

    let textInput = React.createRef();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setState({'search': textInput.current.value})
        }
    }

    return (
            <Form>
                <Form.Group controlId="search">
                    <Form.Row>
                            <Form.Control ref={textInput} placeholder="Enter your keyword..." size="lg" onKeyDown={handleKeyDown} />
                </Form.Row>
                </Form.Group>
            </Form>
    )

}
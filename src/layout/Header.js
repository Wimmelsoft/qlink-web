import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function Header() {

    return (<Jumbotron fluid>
        <Container>
            <h1>QLink</h1>
            <p>
                Did you ever hear something on the radio and you couln't understand. Now you can identify the website by sounds-like
    </p>
        </Container>
    </Jumbotron>
    )
}
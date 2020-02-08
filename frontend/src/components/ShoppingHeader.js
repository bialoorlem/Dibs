import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import ShoppingImage from '../images/shopping.png'


export default function RoomsHeader() {
    return (
        <Container id="list">
            <Image src={ShoppingImage} fluid />
        </Container>
    );
}
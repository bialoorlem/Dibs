import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import LogoImage from '../images/animation.gif'


export default function Schedule() {
    return (
        <Container >
            <Image src={LogoImage} fluid />
        </Container>
    );
}
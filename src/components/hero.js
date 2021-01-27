import React from 'react'
import { Col, Container, Image, Jumbotron,Row } from 'react-bootstrap'
import Tombol from '../components/tombol'

const Hero = ({gambar, gede, kecil}) => (
    <Jumbotron fluid style={{backgroundColor:'#141618', color:'#ffffff'}}>
        <Container>
            <Row className='align-items-center' style={{textAlign:'center'}}>
                <Col xs='12' md={{order:'last', span:'6'}}>
                    <Image src={gambar} fluid alt='hero'/>
                </Col>
                <Col style={{textAlign:'left'}}>
                    <h1 className='display-4'>{gede}</h1>
                    <p className='lead'>{kecil}</p>
                    <Tombol isi={'Pilih Paket'}/>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)
export default Hero;
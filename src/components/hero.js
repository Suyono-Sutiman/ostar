import { Link } from 'gatsby';
import React from 'react'
import { Col, Container, Image, Jumbotron,Row } from 'react-bootstrap'
import Tombol from '../components/tombol'

const Hero = (prop) => (
    <Jumbotron fluid style={{background:prop.bg, color:prop.color}}>
        <Container>
            <Row className='align-items-center text-center'>
                <Col xs='12' md={{order:prop.order, span:prop.span}} className={prop.span||'d-none'}>
                    <Image src={prop.image} fluid alt='hero'/>
                </Col>
                <Col className='text-left' >
                    <h1 className='display-4'>{prop.display}</h1>
                    <p className='lead'>{prop.lead}</p>
                    <Link to={'/'+prop.link1} className={prop.link1||'d-none'}><Tombol isi={prop.link1}/></Link>
                    <Link to={'/'+prop.link2} className={prop.link2||'d-none'}><Tombol isi={prop.link2}kelas={'ml-5'}/></Link>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)
export default Hero;
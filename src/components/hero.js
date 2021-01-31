import { Link } from 'gatsby';
import React from 'react'
import { Button, Col, Container, Image, Jumbotron,Row } from 'react-bootstrap'

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
                    <Link to={'/'+prop.link1} className={prop.link1||'d-none'}>
                    <Button style={{backgroundColor:'#DD0000'}} variant='danger' className='text-capitalize'>
                        {prop.link1}
                    </Button>
                    </Link>
                    <Link to={'/'+prop.link2} className={prop.link2||'d-none'}>
                    <Button style={{backgroundColor:'#DD0000'}} variant='danger' className='text-capitalize ml-5'>
                        {prop.link2}
                    </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)
export default Hero;
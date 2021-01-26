import React from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'

const Contact = () => (
    <Container>
        <Row>
            <Col xs='12' md={{span:'6', offset:'3'}}>
            <Form
            className='rounded shadow' 
            style={{textAlign:'center', backgroundColor:'#DD0000', padding:'1rem'}}>
                <h2 style={{color:'#FFFFFF', textAlign:'center'}} >Siap kembangkan bisnis anda?</h2>
                <Form.Control type='text' placeholder='Nama' aria-label='Nama'/>
                <br/>
                <Form.Control type='email' placeholder='Email' aria-label='Email'/>
                <br/>
                <Form.Control type='number' placeholder='Nomor Telepon' aria-label='Nomor Telepon'/>
                <Button
                className='border-white shadow'
                style={{backgroundColor:'#DD0000', marginBottom:'-4rem'}}
                type='submit' variant='danger'>
                    Hubungi Kami
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
)
export default Contact;
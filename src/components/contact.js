import React from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'

const Contact = () => (
    <Container>
        <Row>
            <Col xs='12' md={{span:'6', offset:'3'}}>
            <Form
            className='rounded shadow text-center p-3' 
            style={{backgroundColor:'#141618'}}>
                <h2 className='h4 text-white'>Siap kembangkan bisnis anda?</h2>
                <Form.Control type='text' placeholder='Nama' aria-label='Nama' required/>
                <br/>
                <Form.Control type='email' placeholder='Email' aria-label='Email' required/>
                <br/>
                <Form.Control type='number' placeholder='Nomor Telepon' aria-label='Nomor Telepon' required/>
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
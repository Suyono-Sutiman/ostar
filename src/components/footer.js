import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

const Footer = () => (
    <footer style={{backgroundColor:'#141618', marginTop:'3rem'}}>
    <Container className='text-white pt-3'>
        <Row>
            <Col xs='12' md='4'>
                <h2 className='h5'>| Alamat</h2>
                <p>Perumahan Mediterania<br/>
                    Blok F3/24, Sukamulya<br/>
                    Cikupa, Tangerang, Banten.<br/>
                    021-5964 5635
                </p>
            </Col>
            <Col xs='12' md='4'>
                <h2 className='h5'>| Temukan Kami</h2>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Whatsapp</p>
            </Col>
            <Col xs='12' md='4'>
                <h2 className='h5'>| Tanya Disini</h2>
                <p>www.Ostar.my.id</p>
            </Col>
        </Row>
        <p className='text-center mb-0 text-muted'>
            copyright @2021. <span>O-star</span> All Rights Reserved
        </p>
    </Container>
    </footer>
)
export default Footer
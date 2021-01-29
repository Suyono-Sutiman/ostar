import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

const Footer = () => (
    <footer style={{backgroundColor:'#141618', marginTop:'3rem'}}>
    <Container style={{color:'#FFFFFF',paddingTop:'1rem'}}>
        <Row>
            <Col xs='12' md='4'>
                <h2>| Alamat</h2>
                <p>Perumahan Mediterania<br/>
                    Blok F3/24, Sukamulya<br/>
                    Cikupa, Tangerang, Banten.<br/>
                    021-5964 5635
                </p>
            </Col>
            <Col xs='12' md='4'>
                <h2>| Temukan Kami</h2>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Whatsapp</p>
            </Col>
            <Col xs='12' md='4'>
                <h2>| Tanya Disini</h2>
                <p>www.Ostar.my.id</p>
            </Col>
        </Row>
        <p style={{textAlign:'center', marginBottom:'0'}}>
            copyright @2021. <span>O-star</span> All Rights Reserved
        </p>
    </Container>
    </footer>
)
export default Footer
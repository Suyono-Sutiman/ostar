import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

const Footer = () => (
    <footer style={{backgroundColor:'#141618'}}>
    <Container style={{color:'#FFFFFF',paddingTop:'1rem'}}>
        <Row>
            <Col xs='12' md='4'>
                <h5 style={{color:'#DD0000'}}>| Alamat</h5>
                <p>Perumahan Mediterania<br/>
                    Blok F3/24, Sukamulya<br/>
                    Cikupa, Tangerang, Banten.<br/>
                    021-5964 5635
                </p>
            </Col>
            <Col xs='12' md='4'>
                <h5 style={{color:'#DD0000'}}>| Temukan Kami</h5>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Whatsapp</p>
            </Col>
            <Col xs='12' md='4'>
                <h5 style={{color:'#DD0000'}}>| Tanya Disini</h5>
                <p>www.Ostar.my.id</p>
            </Col>
        </Row>
        <p style={{textAlign:'center', marginBottom:'0'}}>
            copyright @2021. <span style={{color:'#DD0000'}}>Ostar</span> All Rights Reserved
        </p>
    </Container>
    </footer>
)
export default Footer
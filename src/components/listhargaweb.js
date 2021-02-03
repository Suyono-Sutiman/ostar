import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Hargaweb from './hargaweb'
import Tabharga from './tabharga'

const ListHargaWeb = () => (
    <>
    <h2 className='h4 text-center mb-3' style={{color:'#DD0000'}}>Detail Harga</h2>
    <Row>
        <Col xs='12' md='6' lg='4'>
            <Hargaweb title='Domain (Alamat Website)' harga='150.000 - 225.000'>
                <Tabharga domain='domain'/>
            </Hargaweb>
        </Col>
        <Col xs='12' md='6' lg='4'>
            <Hargaweb title='Logo & Nama Merk' harga='Gratis'>
            <Tabharga logo='logo'/>
            </Hargaweb>
        </Col>
        <Col xs='12' md='6' lg='4'>
            <Hargaweb title='Design Halaman' harga='250.000 - 650.000'>
                <Tabharga design='design'/>
            </Hargaweb>
        </Col>
        <Col xs='12' md='6' lg='4'>
            <Hargaweb title='Development' harga='350.000 - 1.150.000'>
                <Tabharga develop='develop'/>
            </Hargaweb>
        </Col>
        <Col xs='12' md='6' lg='4'>
            <Hargaweb title='Deployment' harga='150.000 - 1.980.000'>
                <Tabharga deploy='deploy'/>
            </Hargaweb>
        </Col>
        <Col xs='12' md='6' lg='4'>
            <Hargaweb title='Maintain' harga='600.000 - 2.600.000'>
                <Tabharga maintain='maintain'/>
            </Hargaweb>
        </Col>
    </Row>
    </>
)
export default ListHargaWeb;
import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import CustoWeb from './customweb'

const PaketHarga = () => {
    return (
        <>
        <h1 className='h4 text-center mb-3' style={{color:'#DD0000'}} id='pilih paket'>Pilihan Paket</h1>
        <Row>
            <Col xs='12' md='6' lg='3' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#141618'}}>
                        Cobain
                    </Card.Header>
                    <Card.Body>
                        <p><s>Rp. 425.000</s>
                        <Button style={{backgroundColor:'#141618'}} variant='dark' className='ml-1 rounded-pill'>
                            Hemat 45%
                        </Button>
                        </p>
                        <h2 className='h1 mb-n2'>190.000,-</h2>
                        <p>setahun</p>
                        <Button style={{backgroundColor:'#141618'}} variant='dark' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p>Domain <strong>Gratis</strong></p>
                        <p>Logo <strong>Text Standart</strong></p>
                        <p><strong>Satu Halaman</strong></p>
                        <p>Kuota <strong>5GB</strong></p>
                        <p>Maintenance <strong>1X / Tahun</strong></p>
                        <p><strong>Connect Sos-Med</strong></p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs='12' md='6' lg='3' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#DD0000'}}>
                        UMKM
                    </Card.Header>
                    <Card.Body>
                        <p><s>Rp. 1.275.000</s>
                        <Button style={{backgroundColor:'#DD0000'}} variant='danger' className='ml-1 rounded-pill'>
                            Hemat 59%
                        </Button>
                        </p>
                        <h2 className='h1 mb-n2'>750.000,-</h2>
                        <p>setahun</p>
                        <Button style={{backgroundColor:'#DD0000'}} variant='danger' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p>Domain <strong>.my.id</strong></p>
                        <p>Logo <strong>Request</strong></p>
                        <p><strong>Dua Halaman</strong></p>
                        <p>Kuota <strong>10GB</strong></p>
                        <p>Maintenance <strong>2X / Tahun</strong></p>
                        <p><strong>Connect Sos-Med</strong></p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs='12' md='6' lg='3' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#141618'}}>
                        Bisnis
                    </Card.Header>
                    <Card.Body>
                        <h2 className='h1 mb-n2'>2.880.000,-</h2>
                        <p>setahun</p>
                        <Button style={{backgroundColor:'#141618'}} variant='dark' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p>Domain <strong>.com</strong></p>
                        <p>Logo <strong>Request</strong></p>
                        <p><strong>Tiga Halaman</strong></p>
                        <p>Kuota <strong>200GB</strong></p>
                        <p>Maintenance <strong>4X / Tahun</strong></p>
                        <p><strong>Connect Sos-Med</strong></p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs='12' md='6' lg='3' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#141618'}}>
                        Corporate
                    </Card.Header>
                    <Card.Body>
                        <h2 className='h1 mb-n2'>7.330.000,-</h2>
                        <p>setahun</p>
                        <Button style={{backgroundColor:'#141618'}} variant='dark' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p>Domain <strong>.com</strong></p>
                        <p>Logo <strong>Request</strong></p>
                        <p><strong>Lima Halaman</strong></p>
                        <p>Kuota <strong>500GB</strong></p>
                        <p>Maintenance <strong>1X / Bulan</strong></p>
                        <p><strong>Connect Sos-Med</strong></p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs='12' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#141618'}}>
                        Custom
                    </Card.Header>
                    <Card.Body>
                        <CustoWeb/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
}
export default PaketHarga
import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'

const PaketMar = () => {
    return (
        <>
        <h1 className='h4 text-center mb-3' style={{color:'#DD0000'}} id='pilih paket'>Pilihan Paket</h1>
        <Row>
            <Col xs='12' md='6' lg='4' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#141618'}}>
                        Kenalan
                    </Card.Header>
                    <Card.Body>
                        <h2 className='h1'>210.000,-</h2>
                        <Button style={{backgroundColor:'#141618'}} variant='dark' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p> <strong>Logo</strong></p>
                        <p> <strong>Facebook Banner</strong></p>
                        <p><strong>Instagram Post</strong></p>
                        <p> <strong>Sticker</strong></p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs='12' md='6' lg='4' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#DD0000'}}>
                        Usaha
                    </Card.Header>
                    <Card.Body>
                        <h2 className='h1'>640.000,-</h2>
                        <Button style={{backgroundColor:'#DD0000'}} variant='danger' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p> <strong>Logo</strong></p>
                        <p> <strong>Facebook Banner</strong></p>
                        <p><strong>Instagram Post</strong></p>
                        <p> <strong>Sticker</strong></p>
                        <p> <strong>Kartu Nama</strong></p>
                        <p> <strong>Nota 2ply</strong></p>
                        <p> <strong>Flyer A6</strong></p>
                        <p> <strong>Spanduk 2X1</strong></p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs='12' md='6' lg='4' className='mb-3'>
                <Card border='dark' className='text-center h-100 shadow'>
                    <Card.Header className='h4'style={{color:'#fff', backgroundColor:'#141618'}}>
                        Bisnis
                    </Card.Header>
                    <Card.Body>
                        <h2 className='h1'>850.000,-</h2>
                        <Button style={{backgroundColor:'#141618'}} variant='dark' className='ml-1 rounded-pill'>
                            Pesan Sekarang
                        </Button>
                        <hr/>
                        <p> <strong>Logo</strong></p>
                        <p> <strong>Facebook Banner</strong></p>
                        <p><strong>Instagram Post</strong></p>
                        <p> <strong>Sticker</strong></p>
                        <p> <strong>Kartu Nama</strong></p>
                        <p> <strong>Nota 4ply</strong></p>
                        <p> <strong>Flyer A6</strong></p>
                        <p> <strong>Roll Up Banner</strong></p>
                        <p> <strong>Spanduk 2X1</strong></p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
}
export default PaketMar
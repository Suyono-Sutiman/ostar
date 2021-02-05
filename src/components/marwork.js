import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Marwork =(prop)=>(
    <>
    <h1 className='text-center h4' style={{color:prop.color}}>Cara kerja kami</h1>
    <Row>
        <Col xs='12' md='6'>
            <h2 className='h5'>1. Diskusi</h2>
            <p>
            Kami akan diskusikan dengan anda tentang media promosi apa yang anda butuhkan.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>2. Design</h2>
            <p>
            Setelah selesai berdiskusi dengan anda kami akan segera men-design pesanan sesuai kebutuhan anda.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>3. Printing</h2>
            <p>
            Segera setelah design kami selesai maka akan langsung kami mulai cetak untuk mewujudkan website anda.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>4. Delivery</h2>
            <p>
                Setelah semua selesai kami akan langsung kirimkan pesanan anda.
            </p>
        </Col>
    </Row>
    </>
)
export default Marwork
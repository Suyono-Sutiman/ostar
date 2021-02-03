import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Webwork =(prop)=>(
    <>
    <h1 className='text-center h4' style={{color:prop.color}}>Cara kerja kami</h1>
    <Row>
        <Col xs='12' md='6'>
            <h2 className='h5'>1. Diskusi</h2>
            <p>
            Kami akan diskusikan dengan anda tentang alamat website yang anda inginkan, logo, design dan juga 
            tentang berapa halaman website yang anda butuhkan.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>2. Design</h2>
            <p>
            Setelah selesai berdiskusi dengan anda kami akan segera menrancang website sesuai kebutuhan anda.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>3. Development</h2>
            <p>
            Segera setelah design kami selesai maka akan langsung kita mulai coding untuk mewujudkan website anda.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>4. Deployment</h2>
            <p>
            Kemudian kami online-kan website anda serta kami integrasikan dengan alamat website yang telah anda pilih.
            </p>
        </Col>
        <Col xs='12' md='6'>
            <h2 className='h5'>5. Maintenance</h2>
            <p>
            Setelah semuanya selesai kami akan terus memantau website anda untuk menjaga performa serta meminimalisir 
            eror yang mungkin terjadi.
            </p>
        </Col>
    </Row>
    </>
)
export default Webwork
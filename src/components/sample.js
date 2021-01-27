import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const Sample = ({gb1,cl1,gb2,gb3,gb4,gb5,gb6,cl2})=>(
    <>
    <h2 style={{color:'#DD0000'}}>Berikut beberapa hasil karya kami</h2>
    <Row>
        <Col xs='12' md='6'>
            <Image src={gb1} alt='sample'fluid className='border border-dark rounded my-2' />
            <Image src={gb2} alt='sample'fluid className='border border-dark rounded my-2' />
            <Image src={gb3} alt='sample'fluid className={cl1||'border border-dark rounded my-2'} />
        </Col>
        <Col>
            <Image src={gb4} alt='sample'fluid className='border border-dark rounded my-2' />
            <Image src={gb5} alt='sample'fluid className='border border-dark rounded my-2' />
            <Image src={gb6} alt='sample'fluid className={cl2||'border border-dark rounded my-2'} />
        </Col>
    </Row>
    </>
)
export default Sample;
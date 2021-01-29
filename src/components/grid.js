import { Link } from 'gatsby'
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Tombol from './tombol'

const Grid=(prop)=>(
    <>
    <Row>
        <Col xs={prop.xs} md={prop.md} style={{margin:'0.5rem 0'}} className={prop.tmb1||'d-none'}>
            <div className='p-3 rounded shadow text-center h-100 d-flex flex-column'
            style={{backgroundColor:prop.bg, color:prop.color}}>
                <h2>{prop.title1}</h2>
                <Image src={prop.image1} alt={prop.title1||''} className={prop.class}/>
                <p className='text-left'>{prop.text1}</p>
                <div className='text-left mt-auto'>
                    <Link to={'/'+prop.tmb1} className={prop.tmb1||'d-none'} >
                    <Tombol isi='Cek Harga'/>
                    </Link>
                </div>
            </div>
        </Col>
        <Col xs={prop.xs} md={prop.md} style={{margin:'0.5rem 0'}} className={prop.tmb2||'d-none'}>
            <div className='p-3 rounded shadow h-100 text-center d-flex flex-column' 
            style={{backgroundColor:prop.bg, color:prop.color}}>
            <h2>{prop.title2}</h2>
            <Image src={prop.image2} alt={prop.title2||''} className={prop.class}/>
            <p className='text-left'>{prop.text2}</p>
                <div className='text-left mt-auto'>
                    <Link to={'/'+prop.tmb2} className={prop.tmb2||'d-none'} >
                    <Tombol isi='Cek Harga'/>
                    </Link>
                </div>
            </div>
        </Col>
        <Col xs={prop.xs} md={prop.md} style={{margin:'0.5rem 0'}} className={prop.tmb3||'d-none'}>
            <div className='p-3 rounded shadow h-100 text-center d-flex flex-column' 
            style={{backgroundColor:prop.bg, color:prop.color}}>
            <h2>{prop.title3}</h2>
            <Image src={prop.image3} alt={prop.title3||''} className={prop.class}/>
            <p className='text-left'>{prop.text3}</p>
                <div className='text-left mt-auto'>
                    <Link to={'/'+prop.tmb3} className={prop.tmb3||'d-none'} >
                    <Tombol isi='Cek Harga'/>
                    </Link>
                </div>
            </div>
        </Col>
        <Col xs={prop.xs} md={prop.md} style={{margin:'0.5rem 0'}} className={prop.tmb4||'d-none'}>
            <div className='p-3 rounded shadow h-100 text-center d-flex flex-column' 
            style={{backgroundColor:prop.bg, color:prop.color}}>
            <h2>{prop.title4}</h2>
            <Image src={prop.image4} alt={prop.title4||''} className={prop.class}/>
            <p className='text-left'>{prop.text4}</p>
                <div className='text-left mt-auto'>
                    <Link to={'/'+prop.tmb4} className={prop.tmb4||'d-none'} >
                    <Tombol isi='Cek Harga'/>
                    </Link>
                </div>
            </div>
        </Col>
    </Row>
    </>
)
export default Grid
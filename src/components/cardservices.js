import React from 'react'
import {Link} from 'gatsby'
import { Button, Card, CardDeck } from 'react-bootstrap'
import webicon from '../images/Web Icon.svg'
import maricon from '../images/Marketing icon.svg'

const CardServices = () => (
    <CardDeck>
        <Card style={{backgroundColor:'#141618', color:'#fff'}}>
            <Card.Header className='text-center'>
                <Card.Title>Website</Card.Title>
            </Card.Header>
            <Card.Body className='text-center'>
                <Card.Img variant='top' src={webicon} className='w-25' alt=''/>
                <Card.Text className='text-left'>
                Situs web adalah inti dari keberadaan online Anda. Kami akan membuat 
                situs web fungsional yang disesuaikan untuk bisnis Anda dan mendorong hasil. Semua situs web 
                kami menyertakan SEO, dan lead generation tools.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to='/website'>
                <Button style={{backgroundColor:'#DD0000'}} variant='danger' >Cek Harga</Button>
                </Link>
            </Card.Footer>
        </Card>
        <Card style={{backgroundColor:'#141618', color:'#fff'}}>
            <Card.Header className='text-center'>
                <Card.Title>Marketing</Card.Title>
            </Card.Header>
            <Card.Body className='text-center'>
                <Card.Img variant='top' src={maricon} className='w-25'alt=''/>
                <Card.Text className='text-left'>
                Kami membantu Anda dalam pengelolaan dan periklanan media sosial 
                untuk membantu Anda mengembangkan bisnis dan menjangkau klien baru.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to='/marketing'>
                <Button style={{backgroundColor:'#DD0000'}} variant='danger' >Cek Harga</Button>
                </Link>
            </Card.Footer>
        </Card>
    </CardDeck>
)
export default CardServices;
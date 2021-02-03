import React from 'react'
import web1 from '../images/real.webp'
import web2 from '../images/foodshop.webp'
import web3 from '../images/coffee.webp'
import web4 from '../images/jjinterprice.webp'
import web5 from '../images/donad.webp'
import mar1 from '../images/kartu.webp'
import mar2 from '../images/brosur.webp'
import mar3 from '../images/logo1.webp'
import mar4 from '../images/logo2.webp'
import mar5 from '../images/flyer.webp'
import { Card, CardColumns } from 'react-bootstrap'
import { Link } from 'gatsby'

const Sample = (prop)=>(
    <>
    <h2 style={{color:'#DD0000'}} className='text-center h4'>Berikut beberapa hasil karya kami</h2>
    <CardColumns>
            <Link to={'/'+prop.link1} className={prop.link1||'d-none'} ariaLabel={prop.link1}>
            <Card>
                <Card.Img alt={prop.link1} src={web1}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link1} className={prop.link1||'d-none'} ariaLabel={prop.link1}>
            <Card>
                <Card.Img alt={prop.link1} src={web2}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link1} className={prop.link1||'d-none'} ariaLabel={prop.link1}>
            <Card>
                <Card.Img alt={prop.link1} src={web3}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link1} className={prop.link1||'d-none'} ariaLabel={prop.link1}>
            <Card>
                <Card.Img alt={prop.link1} src={web4}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link1} className={prop.link1||'d-none'} ariaLabel={prop.link1}>
            <Card>
                <Card.Img alt={prop.link1} src={web5}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link2} className={prop.link2||'d-none'} ariaLabel={prop.link2}>
            <Card>
                <Card.Img alt={prop.link2} src={mar1}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link2} className={prop.link2||'d-none'} ariaLabel={prop.link2}>
            <Card>
                <Card.Img alt={prop.link2} src={mar2}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link2} className={prop.link2||'d-none'} ariaLabel={prop.link2}>
            <Card>
                <Card.Img alt={prop.link2} src={mar3}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link2} className={prop.link2||'d-none'} ariaLabel={prop.link2}>
            <Card>
                <Card.Img alt={prop.link2} src={mar4}/>
            </Card>
            </Link>
            <Link to={'/'+prop.link2} className={prop.link2||'d-none'} ariaLabel={prop.link2}>
            <Card>
                <Card.Img alt={prop.link2} src={mar5}/>
            </Card>
            </Link>
    </CardColumns>
    
    </>
)
export default Sample;
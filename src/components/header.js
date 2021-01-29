import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container, Image, Nav, Navbar} from 'react-bootstrap'
import Tombol from "./tombol"

const Header = (prop) => {
  return(
    <Navbar collapseOnSelect expand={prop.expand} variant={prop.variant} className='shadow' fixed='top'
      style={{backgroundColor: prop.bg}}>
      <Container>
        <Link to='/'>
      <Navbar.Brand>
      <Image
        alt={prop.siteTitle}
        src={prop.logo}
        className={prop.logo||'d-none'}
      />{' '}
        {prop.siteTitle}
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item className={prop.link1||'d-none'}>
          <Link to={'/'+prop.link1} className='navbar-dark navbar-nav nav-link'>
          <p className='text-capitalize mb-0' >{prop.link1}</p>
          </Link>
          </Nav.Item>
          <Nav.Item className={prop.link2||'d-none'}>
          <Link to={'/'+prop.link2} className='navbar-dark navbar-nav nav-link'>
          <p className='text-capitalize mb-0' >{prop.link2}</p>
          </Link>
          </Nav.Item>
          <Nav.Item className={prop.link3||'d-none'}>
          <Link to={'/'+prop.link3} className='navbar-dark navbar-nav nav-link'>
          <p className='text-capitalize mb-0' >{prop.link3}</p>
          </Link>
          </Nav.Item>
          <Nav.Item className={prop.link4||'d-none'}>
          <Link to={'/'+prop.link4} className='navbar-dark navbar-nav nav-link'>
          <p className='text-capitalize mb-0' >{prop.link4}</p>
          </Link>
          </Nav.Item>
          <Nav.Item className={prop.link5||'d-none'}>
          <Link to={'/'+prop.link5} className='navbar-dark navbar-nav nav-link'>
          <p className='text-capitalize mb-0' >{prop.link5}</p>
          </Link>
          </Nav.Item>
        </Nav>
        <a href={'https://wa.me/62'+prop.phone} target='blank' className={prop.phone||'d-none'}>
        <Tombol isi='Kirim Pesan'/>
        </a>
      </Navbar.Collapse>
      </Container>
    </Navbar>
)}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

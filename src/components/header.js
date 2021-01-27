import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container, Image, Nav, Navbar} from 'react-bootstrap'
import logo from '../images/Ostar.svg'
import Tombol from "./tombol"

const Header = ({ siteTitle }) => (
  <header style={{marginBottom:'54px'}}>
    <Navbar
      collapseOnSelect 
      expand="md"
      variant='dark'
      className='shadow'
      fixed='top'
      style={{
        backgroundColor:'#141618',
      }}>
      <Container>
        <Link to='/'>
      <Navbar.Brand>
      <Image
        alt="Ostar"
        src={logo}
        className="d-inline-block align-top"
      />{' '}
        {siteTitle}
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Website Development</Nav.Link>
          <Nav.Link>Marketing</Nav.Link>
          
        </Nav>
        <Nav className='ml-auto'>
        <Tombol isi={'Kirim Pesan'}/>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

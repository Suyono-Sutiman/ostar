import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"
import "./layout.css"
import Footer from "./footer";
import Contact from './contact'
import ostar from '../images/Ostar.svg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
/*Header prop
expand='md lg xl', variant='dark light', bg='#color',logo='import site logo', link 1-5='link',phone='tombol WA' */
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} expand='md' variant='dark' bg='#141618'
      logo={ostar} link1='website' link2='marketing' phone='081219013721'
      />
      <main style={{marginTop:'54px'}} >{children}</main>
      <Contact/>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

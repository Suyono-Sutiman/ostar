import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import herolp from '../images/HeroLP.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero gambar={herolp}
          gede={'Solusi Bisnis'}
          kecil={'Kembangkan bisnis anda bersama kami'}
          />
    <Link to="/website_development/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

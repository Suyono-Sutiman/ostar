import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import herolp from '../images/HeroLP.svg'
import { Container } from "react-bootstrap"
import Adva from "../components/kelebihan"
import Opening from "../components/opening"
import Service from "../components/service"
import Layanan from "../components/layanan"
import Sample from "../components/sample"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero image={herolp} bg='#141618'color='#FFF' span='6' order='last'link1='website' link2='marketing'
          display={'Solusi Bisnis'}
          lead={'Kembangkan bisnis anda bersama kami'}/>
    <Container>
      <Opening color='#DD0000'/>
      <Service/>
      <Adva color='#DD0000'/>
      <Sample/>
      <Layanan color='#DD0000'/>
    </Container>
  </Layout>
)

export default IndexPage

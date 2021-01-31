import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import herolp from '../images/HeroLP.svg'
import { Container } from "react-bootstrap"
import Adva from "../components/kelebihan"
import Opening from "../components/opening"
import Layanan from "../components/layanan"
import Sample from "../components/sample"
import CardServices from "../components/cardservices"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description='Jasa pembuatan website dan Jasa promosi dan marketing'/>
    <Hero image={herolp} bg='#141618'color='#FFF' span='6' order='last'link1='website' link2='marketing'
          display={'Solusi Bisnis'}
          lead={'Kembangkan bisnis anda bersama kami'}/>
    <Container>
      <Opening color='#DD0000'/>
      <CardServices/>
      <Adva color='#DD0000'/>
      <Sample link1='website' link2='marketing'/>
      <Layanan color='#DD0000'/>
    </Container>
  </Layout>
)

export default IndexPage

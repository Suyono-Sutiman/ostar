import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import herowd from '../images/HeroWD.svg'
import { Container } from "react-bootstrap"
import Adva from "../components/kelebihan"
import Sample from '../components/sample'
import Webwork from "../components/webwork"

const Website = () => (
  <Layout>
    <SEO title="Website Development" description='Jasa pembuatan website' />
    <Hero image={herowd} bg='#141618'color='#FFF' span='6' order='last'link1='website'
          display={'Internet dimana-mana, website harus punya'}
          lead={'Website membamtu bisnis anda menjangkau lebih banyak pelanggan'}/>
    <Container>
      <Adva color='#DD0000' p2='d-none'/>
      <Webwork color='#DD0000'/>
      <Sample link1='website'/>
    </Container>
  </Layout>
)

export default Website

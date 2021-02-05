import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import herom from '../images/HeroM.svg'
import { Container } from "react-bootstrap"
import Adva from "../components/kelebihan"
import Sample from "../components/sample"
import Marwork from "../components/marwork"
import PaketMar from "../components/paketmar"
import Listmar from "../components/listmar"

const Marketing = () => (
  <Layout>
    <SEO title="Marketing" description='Jasa promosi dan marketing' />
    <Hero image={herom} bg='#141618'color='#FFF' span='6' order='last'
          display={'Promosikan produk anda online dan offline'}
          lead={'Kami bantu anda melakukan promosi online melalui social media serta offline dengan spanduk, banner, dan brosur.'}
          link3='pilih paket'/>
    <Container>
      <Adva color='#DD0000' p1='d-none'/>
      <Marwork color='#DD0000'/>
      <PaketMar/>
      <Listmar/>
      <Sample link2='marketing'/>
    </Container>
  </Layout>
)

export default Marketing
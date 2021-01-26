import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import herolp from '../images/HeroLP.svg'
import { Col, Container, Row, Image } from "react-bootstrap"
import webicon from '../images/Web Icon.svg'
import Tombol from '../components/tombol'
import maricon from '../images/Marketing icon.svg'
import Adva from "../components/kelebihan"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero gambar={herolp}
          gede={'Solusi Bisnis'}
          kecil={'Kembangkan bisnis anda bersama kami'}/>
    <Container className='text-center'>
      <h1 style={{color:'#DD0000'}}>Website & Promosi</h1>
      <p>Kami membantu bisnis mendapatkan lebih banyak prospek dan brand awareness dengan menilai kembali 
        dan meningkatkan kehadiran online mereka. Kami menyediakan desain web unik yang dikombinasikan 
        dengan pengoptimalan search engine (SEO), iklan online, dan strategi konten untuk memastikan 
        pertumbuhan bisnis.
      </p>
      <Row className='text-white'>
        <Col
        className='my-3 py-3 rounded shadow'
        xs={{offset:1, span:'10'}} md={{span:'5', offset:'0'}} style={{backgroundColor:'#141618'}}>
          <h2>Website</h2>
          <Image src={webicon} alt='website' width='80' height='80'/>
          <p className='text-left'>
          Situs web adalah inti dari keberadaan online Anda. Kami akan membuat situs web fungsional yang 
          disesuaikan untuk bisnis Anda dan mendorong hasil. Semua situs web kami menyertakan SEO, dan lead 
          generation tools.
          </p>
          <Tombol isi={'Cek harga'}/>
        </Col>
        <Col
        className='my-3 py-3 rounded shadow'
        xs={{offset:1, span:'10'}} md={{span:'5', offset:'2'}} style={{backgroundColor:'#141618'}}>
          <h2>Marketing</h2>
          <Image src={maricon} alt='website' width='80' height='80'/>
          <p className='text-left'>
          Kami membantu Anda dalam pengelolaan dan periklanan media sosial untuk membantu Anda mengembangkan 
          bisnis dan menjangkau klien baru.
          </p>
          <Tombol isi={'Cek harga'}/>
        </Col>
      </Row>
      <Adva/>
    </Container>
  </Layout>
)

export default IndexPage

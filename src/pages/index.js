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
import Sample from '../components/sample'
import web1 from '../images/foodshop.png'
import web2 from '../images/real.png'
import web3 from '../images/jjinterprice.png'
import mar1 from '../images/kartu.png'
import mar2 from '../images/logo2.png'
import mar3 from '../images/brosur.png'

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
          <Image src={webicon} alt='website'/>
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
          <Image src={maricon} alt='website'/>
          <p className='text-left'>
          Kami membantu Anda dalam pengelolaan dan periklanan media sosial untuk membantu Anda mengembangkan 
          bisnis dan menjangkau klien baru.
          </p>
          <Tombol isi={'Cek harga'}/>
        </Col>
      </Row>
      <Adva/>
      <Sample gb1={web1} gb2={web2}gb3={web3}gb4={mar1}gb5={mar2}gb6={mar3}/>
      <h2 style={{color:'#DD0000'}}>Industri yang kami layani</h2>
      <h3 className='text-left'>Real Estate / Perumahan</h3>
      <p className='text-left'>
      Kami bekerja sama dengan agen / brokers perumahan untuk membantu mereka memperluas jangkauan dan mendapatkan 
      prospek dan penawaran yang lebih baik di bidang perumahan.
      </p>
      <h3 className='text-left'>Health Care / Tenaga Medis</h3>
      <p className='text-left'>
      Kami bekerja dengan profesional perawatan kesehatan seperti pelatih kesehatan, pelatih pribadi, dan terapis 
      fisik untuk memposisikan diri sebagai ahli terkemuka di bidangnya.
      </p>
      <h3 className='text-left'>B2B (Business to Business) & B2C (Business to Customer)</h3>
      <p className='text-left'>
      Kami membantu perusahaan B2B & B2C dengan membuat konten yang berharga, pencitraan merek yang konsisten, 
      dan kehadiran online yang optimal untuk perolehan prospek maksimum.
      </p>
      <h3 className='text-left'>Pariwisata</h3>
      <p className='text-left'>
      Kami bekerja dengan perusahaan tur liburan, agen perjalanan, dan banyak lagi. Kami membantu mereka 
      mengembangkan visibilitas online mereka, mengoptimalkan nilai merek mereka, dan menarik lebih 
      banyak klien melalui pemasaran digital.
      </p>
    </Container>
  </Layout>
)

export default IndexPage

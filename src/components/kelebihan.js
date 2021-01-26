import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Adva = ({dis1,dis2}) => (
    <>
        <h2 style={{color:'#DD0000'}}>Mengapa memilih kami</h2>
        <Row className='text-left'>
            <Col xs='12' className={dis1}>
                <p>
                Dengan keahlian dan pengetahuan kami, kami dapat membangun situs web berkualitas tinggi yang 
                menarik secara visual yang mendorong konversi untuk membantu mengembangkan bisnis Anda. Kami 
                bekerja sama dengan Anda untuk mengembangkan pemahaman yang mendalam tentang tujuan dan 
                industri perusahaan Anda untuk menerapkan elemen yang akan melibatkan pengunjung Anda 
                sejak mereka datang ke situs Anda.
                </p>
            </Col>
            <Col xs='12' className={dis2}>
                <p>
                Iklan berbayar di media sosial adalah cara yang bagus untuk menjangkau pelanggan baru sambil 
                berinteraksi kembali dengan yang sudah ada. Tetapi hanya jika itu dilakukan secara efektif! 
                Jika tidak, Anda membuang uang dengan peluang acak untuk melihat hasilnya. Ada banyak platform 
                sosial di luar sana dan keputusan tentang di mana dan bagaimana menjalankan iklan membuatnya 
                semakin kompleks. Dengan pengetahuan dan keahlian kami, kami dapat membantu Anda membuat 
                iklan sosial yang (lebih) efektif.
                </p>
            </Col>
        </Row>
    </>
)
export default Adva;
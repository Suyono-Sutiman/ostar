import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

const Layanan = (prop) => (
    <>
        <h2 style={{color:prop.color}}  className='text-center h4'>Industri yang kami layani</h2>
        <CardDeck>
            <Card border='light' className='mt-2'>
                <Card.Body>
                <Card.Title>Pariwisata</Card.Title>
                <Card.Text>
                Kami bekerja dengan perusahaan tur liburan, agen perjalanan, dan banyak lagi. Kami membantu mereka 
                mengembangkan visibilitas online mereka, mengoptimalkan nilai merek mereka, dan menarik lebih 
                banyak klien melalui pemasaran digital.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light' className='mt-2'>
                <Card.Body>
                <Card.Title>B2B (Business to Business) & B2C (Business to Customer)</Card.Title>
                <Card.Text>
                Kami membantu perusahaan B2B & B2C dengan membuat konten yang berharga, pencitraan merek yang 
                konsisten, dan kehadiran online yang optimal untuk perolehan prospek maksimum.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <CardDeck>
            <Card border='light' className='mt-2'>
                <Card.Body>
                <Card.Title>Real Estate / Perumahan</Card.Title>
                <Card.Text>
                Kami bekerja sama dengan agen / brokers perumahan untuk membantu mereka memperluas jangkauan dan 
                mendapatkan prospek dan penawaran yang lebih baik di bidang perumahan.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light' className='mt-2'>
                <Card.Body>
                <Card.Title>Health Care / Tenaga Medis</Card.Title>
                <Card.Text>
                Kami bekerja dengan profesional perawatan kesehatan seperti pelatih kesehatan, pelatih pribadi, 
                dan terapis fisik untuk memposisikan diri sebagai ahli terkemuka di bidangnya.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </>
)
export default Layanan;
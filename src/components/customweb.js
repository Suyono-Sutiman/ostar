import React, { useState } from 'react'
import { Col, Row, Dropdown, Button } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'

const CustoWeb = () => {
    const [domain, setDomain] = useState(0)
    const gratis = () => setDomain(0)
    const com = () => setDomain(150)
    const net = () => setDomain(180)
    const id = () => setDomain(225)
    const org = () => setDomain(210)
    const shop = () => setDomain(540)
    const online = () => setDomain(565)
    const store = () => setDomain(880)
    const myid = () => setDomain(50)
    const [logo, setLogo] = useState(0)
    const logoGratis = () => setLogo(0)
    const pakai = () => setLogo(75)
    const design = 125
    const [hal, setHal] = useState(0)
    const hal1 = () => setHal(1)
    const hal2 = () => setHal(2)
    const hal3 = () => setHal(3)
    const hal4 = () => setHal(4)
    const hal5 = () => setHal(5)
    const halaman = (design*hal)
    const [kuota, setKuota] = useState(0)
    const limagb = ()=> setKuota(300)
    const puluhgb = ()=> setKuota(600)
    const ratusgb = ()=> setKuota(1380)
    const ribugb = ()=> setKuota(1980)
    const mtc = 75
    const [maintain, setMaintain] = useState(0)
    const tanpamtc = () => setMaintain(0)
    const satukali = () => setMaintain(1)
    const duakali = () => setMaintain(2)
    const empatkali = () => setMaintain(4)
    const bulanan = () => setMaintain(12)
    const mtcsum = (mtc*hal*maintain)

    const total = domain + logo + halaman + kuota + mtcsum
    return (
        <>
        <Row>
            <Col xs='12' md='6'>
                <h2 className='h5'>Pilihan</h2>
                <Dropdown className='mb-3'>
                    <DropdownToggle variant='dark' className='w-100'>
                        Domain
                    </DropdownToggle>
                    <DropdownMenu className='w-100 text-center'>
                        <DropdownItem onClick={gratis}>Gratis</DropdownItem>
                        <DropdownItem onClick={com}>.com</DropdownItem>
                        <DropdownItem onClick={net}>.net</DropdownItem>
                        <DropdownItem onClick={id}>.id</DropdownItem>
                        <DropdownItem onClick={org}>.org</DropdownItem>
                        <DropdownItem onClick={shop}>.shop</DropdownItem>
                        <DropdownItem onClick={online}>.online</DropdownItem>
                        <DropdownItem onClick={store}>.store</DropdownItem>
                        <DropdownItem onClick={myid}>.my.id</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className='mb-3'>
                    <DropdownToggle variant='dark' className='w-100'>
                        Logo
                    </DropdownToggle>
                    <DropdownMenu className='w-100 text-center'>
                        <DropdownItem onClick={logoGratis}>Tanpa Logo</DropdownItem>
                        <DropdownItem onClick={pakai}>Pakai Logo</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className='mb-3'>
                    <DropdownToggle variant='dark' className='w-100'>
                        Halaman Utama
                    </DropdownToggle>
                    <DropdownMenu className='w-100 text-center'>
                        <DropdownItem onClick={hal1}>Satu Halaman</DropdownItem>
                        <DropdownItem onClick={hal2}>Dua Halaman</DropdownItem>
                        <DropdownItem onClick={hal3}>Tiga Halaman</DropdownItem>
                        <DropdownItem onClick={hal4}>Empat Halaman</DropdownItem>
                        <DropdownItem onClick={hal5}>Lima Halaman</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className='mb-3'>
                    <DropdownToggle variant='dark' className='w-100'>
                        Kuota Hosting
                    </DropdownToggle>
                    <DropdownMenu className='w-100 text-center'>
                        <DropdownItem onClick={limagb}>5GB</DropdownItem>
                        <DropdownItem onClick={puluhgb}>10Gb</DropdownItem>
                        <DropdownItem onClick={ratusgb}>200Gb</DropdownItem>
                        <DropdownItem onClick={ribugb}>500GB</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className='mb-3'>
                    <DropdownToggle variant='dark' className='w-100'>
                        Maintenance
                    </DropdownToggle>
                    <DropdownMenu className='w-100 text-center'>
                        <DropdownItem onClick={tanpamtc}>Tanpa Maintenance</DropdownItem>
                        <DropdownItem onClick={satukali}>1X / Tahun</DropdownItem>
                        <DropdownItem onClick={duakali}>2X / Tahun</DropdownItem>
                        <DropdownItem onClick={empatkali}>4X / Tahun</DropdownItem>
                        <DropdownItem onClick={bulanan}>Bulanan</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
            <Col xs='12' md='6'>
                <h2 className='h5'>Detail</h2>
                <p>Domain : Rp. <strong>{domain.toFixed(3)}</strong></p>
                <p>Logo : Rp. <strong>{logo.toFixed(3)}</strong></p>
                <p>Halaman : Rp. <strong>{halaman.toFixed(3)}</strong></p>
                <p>Kuota : Rp. <strong>{kuota.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}</strong></p>
                <p>Maintenance : Rp. <strong>{mtcsum.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}</strong></p>
                <hr/>
                <h3 className='h5'>Total : Rp. <strong>
                    {total.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}
                </strong></h3>
                <Button style={{backgroundColor:'#DD0000'}} variant='danger' href={'https://wa.me/6281219013721'} 
                target='blank' className='rounded-pill'>
                Hubungi Sales
                </Button>
            </Col>
        </Row>
        </>
    )
}
export default CustoWeb
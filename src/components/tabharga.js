import React from 'react'
import { Table } from 'react-bootstrap'

const Tabharga = ({domain, logo, design,develop,deploy,maintain}) => {
    return (
        <div className='p-2 text-wrap'>
        <Table striped bordered hover size="sm" responsive className={domain||'d-none'}>
            <thead className='thead-dark'>
            <tr>
                <th>Tipe</th>
                <th>Tahun Pertama</th>
                <th>Tahun Kedua</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>.com</td>
                    <td>150.000</td>
                    <td>150.000</td>
                </tr>
                <tr>
                    <td>.net</td>
                    <td>180.000</td>
                    <td>180.000</td>
                </tr>
                <tr>
                    <td>.id</td>
                    <td>225.000</td>
                    <td>225.000</td>
                </tr>
                <tr>
                    <td>.org</td>
                    <td>155.000</td>
                    <td>210.000</td>
                </tr>
                <tr>
                    <td>.shop</td>
                    <td>145.000</td>
                    <td>540.000</td>
                </tr>
                <tr>
                    <td>.online</td>
                    <td>50.000</td>
                    <td>565.000</td>
                </tr>
                <tr>
                    <td>.store</td>
                    <td>70.000</td>
                    <td>880.000</td>
                </tr>
                <tr>
                    <td>.my.id</td>
                    <td>50.000</td>
                    <td>50.000</td>
                </tr>
                <tr>
                    <td>.picture</td>
                    <td>190.000</td>
                    <td>190.000</td>
                </tr>
                <tr>
                    <td>.xyz</td>
                    <td>40.000</td>
                    <td>210.000</td>
                </tr>
                <tr>
                    <td>.art</td>
                    <td>110.000</td>
                    <td>225.000</td>
                </tr>
                <tr>
                    <td>.date</td>
                    <td>70.000</td>
                    <td>460.000</td>
                </tr>
                <tr>
                    <td>.win</td>
                    <td>70.000</td>
                    <td>460.000</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover size="sm" responsive className={logo||'d-none'}>
            <thead className='thead-dark'>
            <tr>
                <th>Tanpa Logo & Merk</th>
                <th>Pakai Logo & Merk</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gratis</td>
                    <td>100.000</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover size="sm" responsive className={design||'d-none'}>
            <thead className='thead-dark'>
            <tr>
                <th>Jumlah Halaman</th>
                <th>Harga</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 Halaman</td>
                    <td>250.000</td>
                </tr>
                <tr>
                    <td>2 Halaman</td>
                    <td>350.000</td>
                </tr>
                <tr>
                    <td>3 Halaman</td>
                    <td>450.000</td>
                </tr>
                <tr>
                    <td>4 Halaman</td>
                    <td>550.000</td>
                </tr>
                <tr>
                    <td>5 Halaman</td>
                    <td>650.000</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover size="sm" responsive className={develop||'d-none'}>
            <thead className='thead-dark'>
            <tr>
                <th>Jumlah Halaman</th>
                <th>Harga</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 Halaman</td>
                    <td>350.000</td>
                </tr>
                <tr>
                    <td>2 Halaman</td>
                    <td>550.000</td>
                </tr>
                <tr>
                    <td>3 Halaman</td>
                    <td>750.000</td>
                </tr>
                <tr>
                    <td>4 Halaman</td>
                    <td>950.000</td>
                </tr>
                <tr>
                    <td>5 Halaman</td>
                    <td>1.150.000</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover size="sm" responsive className={deploy||'d-none'}>
            <thead className='thead-dark'>
            <tr>
                <th>Kuota Hosting / Bulan</th>
                <th>Harga / Tahun</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5GB</td>
                    <td>150.000</td>
                </tr>
                <tr>
                    <td>10GB</td>
                    <td>600.000</td>
                </tr>
                <tr>
                    <td>200GB</td>
                    <td>1.380.000</td>
                </tr>
                <tr>
                    <td>500GB</td>
                    <td>1.980.000</td>
                </tr>
            </tbody>
        </Table>
        <Table striped bordered hover size="sm" responsive className={maintain||'d-none'}>
            <thead className='thead-dark'>
            <tr>
                <th>Jumlah Halaman</th>
                <th>Harga</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 Halaman</td>
                    <td>350.000</td>
                </tr>
                <tr>
                    <td>2 Halaman</td>
                    <td>650.000</td>
                </tr>
                <tr>
                    <td>3 Halaman</td>
                    <td>950.000</td>
                </tr>
                <tr>
                    <td>4 Halaman</td>
                    <td>1.250.000</td>
                </tr>
                <tr>
                    <td>5 Halaman</td>
                    <td>1.550.000</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}
export default Tabharga;
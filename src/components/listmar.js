import React from 'react'

import { Table } from 'react-bootstrap'

const Listmar = () => (
    <>
    <h1 className='h4 text-center mb-3' style={{color:'#DD0000'}} id='pilih paket'>Daftar Harga</h1>
    <Table striped bordered hover size='sm' responsive>
        <thead>
            <tr>
                <th>Tipe</th>
                <th>Ukuran</th>
                <th>Harga</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Logo</td>
                <td>-</td>
                <td>75.000</td>
            </tr>
            <tr>
                <td>Facebook Banner</td>
                <td>-</td>
                <td>25.000</td>
            </tr>
            <tr>
                <td>Twitter Banner</td>
                <td>-</td>
                <td>25.000</td>
            </tr>
            <tr>
                <td>Youtube Banner</td>
                <td>-</td>
                <td>25.000</td>
            </tr>
            <tr>
                <td>Instagram Post</td>
                <td>-</td>
                <td>50.000</td>
            </tr>
            <tr>
                <td>Kartu Nama @95pcs</td>
                <td>-</td>
                <td>85.000</td>
            </tr>
            <tr>
                <td rowSpan='3'>Nota</td>
                <td>2ply</td>
                <td>75.000</td>
            </tr>
            <tr>
                <td>3ply</td>
                <td>85.000</td>
            </tr>
            <tr>
                <td>4ply</td>
                <td>95.000</td>
            </tr>
            <tr>
                <td>ID Card @5pcs</td>
                <td>-</td>
                <td>75.000</td>
            </tr>
            <tr>
                <td rowSpan='2'>Brosur @125pcs</td>
                <td>A4</td>
                <td>300.000</td>
            </tr>
            <tr>
                <td>A5</td>
                <td>230.000</td>
            </tr>
            <tr>
                <td rowSpan='3'>Flyer @125pcs</td>
                <td>A4</td>
                <td>375.000</td>
            </tr>
            <tr>
                <td>A5</td>
                <td>230.000</td>
            </tr>
            <tr>
                <td>A6</td>
                <td>150.000</td>
            </tr>
            <tr>
                <td>Sticker</td>
                <td>A3</td>
                <td>60.000</td>
            </tr>
            <tr>
                <td rowSpan='2'>Roll-Up Banner</td>
                <td>60cm</td>
                <td>250.000</td>
            </tr>
            <tr>
                <td>80cm</td>
                <td>350.000</td>
            </tr>
            <tr>
                <td>X Banner</td>
                <td>60X160</td>
                <td>210.000</td>
            </tr>
            <tr>
                <td>Spanduk</td>
                <td>/meter</td>
                <td>60.000</td>
            </tr>
        </tbody>
    </Table>
    </>
)
export default Listmar
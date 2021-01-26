import React from 'react'
import Button from 'react-bootstrap/Button'

const Tombol = ({isi}) => (
    <Button variant="danger" style={{backgroundColor:'#DD0000'}}>{isi}</Button>
)
export default Tombol;
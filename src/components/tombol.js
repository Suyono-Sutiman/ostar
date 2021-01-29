import React from 'react'
import Button from 'react-bootstrap/Button'

const Tombol = (prop) => (
    <Button variant="danger" style={{backgroundColor:'#DD0000'}} className={prop.kelas}>
        <p className='text-capitalize mb-0'>{prop.isi}</p>
    </Button>
)
export default Tombol;
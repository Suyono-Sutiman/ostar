import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

const Hargaweb = ({harga, title, children, detail}) => {
    const [show, setShow] = useState(false)
    const handleShow= () => setShow(true)
    const handleClose=()=> setShow(false)
    return (
        <>
        <Card border='dark' className='shadow text-right mb-2'>
            <Card.Body>
                <Card.Title className='text-left' style={{color:'#DD0000'}}>{title}</Card.Title>
                <Card.Text className='text-muted h6 text-left'>{harga}</Card.Text>
                <Button variant='outline-dark'onClick={handleShow}>
                    Detail
                </Button>
            </Card.Body>
        </Card>

      <Modal show={show} onHide={handleClose} size='lg' centered>
          <p>{children}</p>
      </Modal>
        </>
    )
}
export default Hargaweb
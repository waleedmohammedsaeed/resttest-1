import React, {useState} from 'react'
import Modal from  'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'

const Addcustomer = (props) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  function addnewcustomer(name, type){
    setName(name)
    setType(type)
    console.log('new customer')
  }

  return (
    <div>
        <button onClick={handleShow} className='btn btn-primary m-auto d-block my-5'>Add Customer</button>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <div className="rounded-0 bg-white">
                <Modal.Header >
                <Modal.Title  className='d-flex justify-content-between'>تعديل البيانات</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={(e)=>{
                    // e.preventDefault()
                    console.log('Hello Here')
                     props.addnewcustomer(name, type)
                     setName('')
                     setType('')
                    setShow(false)
                }}
                        id='addmodal'>
                    <div className='d-flex'>
                        <div className='w-100'>
                            <div>
                                <label htmlFor='cname'>Name</label>
                                <input type="text" 
                                        id='cname' 
                                        name='cname' 
                                        value={name}
                                        placeholder='Enter Name'
                                        className="form-control shadow-sm w-100" 
                                        aria-label="form-control-sm example"
                                        onChange={(e)=> setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='ctype'>Type</label>
                                <input type="text" 
                                        id='ctype' 
                                        name='ctype' 
                                        value={type}
                                        placeholder='Enter Customer Type'
                                        className="form-control shadow-sm w-100 border" 
                                        aria-label="form-control-sm example"
                                        onChange={(e) => setType(e.target.value)}
                                />
                            </div>  
                        </div>
                    </div>
                </form>

                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <button form='addmodal' className='btn btn-primary'>Add</button>
                </Modal.Footer>
            </div>
        </Modal>
    </div>
  )
}
export default Addcustomer

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCustomer(props) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addCustomer(id, cname, ctype) {
      return {id:id, name:name, type:type}
  }

  return (
      <>
        <button className='btn btn-outline-secondary rounded-5 px-3 py-2 w-auto my-4' 
                onClick={handleShow}>Add Customer <span className='fw-bold'>+</span></button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            
          >
            <Modal.Header >
              <Modal.Title  className='d-flex justify-content-between'>تعديل البيانات</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <form onSubmit={(e)=>{
                e.preventDefault()
                 console.log('Hello Here')
                 props.addCustomer(id, name, type)
                 setId('')
                 setName('')
                 setType('')
                 setShow(false)
              }}
                    id='addmodal'>
                  <div className='d-flex'>
                      <div>
                          <div>
                              <label htmlFor='cid'>ID</label>
                              <input type="text" 
                                    id='cid' 
                                    name='cname' 
                                    value={id}
                                    placeholder='Enter ID'
                                    className="form-control form-control-md shadow-sm bg-light" 
                                    aria-label="form-control-sm example"
                                    onChange={(e)=> setId(e.target.value)}
                              />
                          </div>
                          <div>
                              <label htmlFor='cname'>Name</label>
                              <input type="text" 
                                    id='cname' 
                                    name='cname' 
                                    value={name}
                                    placeholder='Enter Name'
                                    className="form-control form-control-md shadow-sm bg-light" 
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
                                    className="form-control form-control-md shadow-sm bg-light" 
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
          </Modal>
      </>
  );
}

export default AddCustomer

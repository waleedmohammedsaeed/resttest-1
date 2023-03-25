import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Updatecustomer(props) {
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <button onClick={handleShow} className="my-2 btn btn-outline-primary rounded-pill m-auto d-block mb-3 w-75">
             Update
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header >
              <Modal.Title  className='d-flex justify-content-between'>تعديل البيانات</Modal.Title>
            </Modal.Header>
            <Modal.Body className='rounded-0'>
              <form onSubmit={(e)=>{
                e.preventDefault()
                 console.log('Hello Here')
                 props.updatecustomerdata(props.id, name, type)
                 setShow(false)
              }}
                    id='editmodal'>
                  <div className='d-flex'>
                      <div>
                          <div>
                              <label htmlFor='cname'>Name</label>
                              <input type="text" 
                                    id='cname' 
                                    name='cname' 
                                    value={name}
                                    className="form-control form-control-md shadow-sm bg-light" 
                                    aria-label="form-control-sm example"
                                    onChange={(e)=> setName(e.target.value)}
                              />
                          </div>
                          <div>
                              <label htmlFor='ctype'>Name</label>
                              <input type="text" 
                                    id='ctype' 
                                    name='ctype' 
                                    value={type}
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
              <button form='editmodal' className='btn btn-primary'>Update</button>
            </Modal.Footer>
          </Modal>
      </>
  );
}

export default Updatecustomer

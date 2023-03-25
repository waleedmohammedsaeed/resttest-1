import React, { useState, useEffect } from 'react'

const Customerupdate = (props) => {
    const [cname, setCname] = useState(props.name)
    const [ctype, setType] = useState(props.type)
   

  return (
    <>
        <button
          type="button"
          className="mt-2 btn btn-outline-primary rounded-pill m-auto d-block mb-3 w-75"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          تعديل
          {cname}
        </button>
        <div className="m-auto w-75 rounded-1">
          <div
            className="modal fade"
            id="modalId"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >     
              <div className="modal-dialog" role="document">
                <div className="modal-content  rounded-0" id={props.id}>
                  <div className="modal-header d-flex justify-content-between bg-light border">
                    <div>
                      <h5
                        className="modal-title d-inline boder border-danger"
                        id="modalTitleId"
                      >
                        Edit Customer {props.name}
                      </h5>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                  <div className="modal-body">
                    <form id="editmodal" 
                        onSubmit={(e) => {
                          e.preventDefault();
                          console.log('Hello and wellcome')
                          props.updatec(props.id, 'mohammed', props.type)
                          console.log('name is ',props.name, ' type is ',props.type)
                        }}  
                        className='sub'
                    >
                      <div className="mb-3 d-flex gap-2 align-items-center">
                        <label htmlFor="customername" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm p-2 shadow-sm"
                          name="cname"
                          id="customername"
                          // aria-describedby="helpId"
                          // placeholder="Edit name"
                          value={cname}
                          onChange={(e) => setCname(e.target.value)}
                        />
                      </div>

                      <div className="mb-3  d-flex gap-2 align-items-center">
                        <label htmlFor="customerage" className="form-label">
                          type
                        </label>
                        <input
                          type="text"
                          className="form-control p-2 shadow-sm"
                          name="ctype"
                          id="ctype"
                          // aria-describedby="helpId"
                          // placeholder="Edit age"
                          value={ctype}
                          onChange={(e) => setType(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn btn-secondary w-25"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      form='editmodal'
                      type='submit'
                      className="btn btn-primary w-25"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
    </>
  );
}

export default Customerupdate
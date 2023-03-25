import React from 'react'
// import Customerupdate from './Customerupdate'
import Updatecustomer from './Updatecustomer'
import AddCustomer from './AddCustomer'
import '../styles/loyality.css'

const Loyality = (props) => {
    return (
      <div className="card shadow-lg m-auto my-3 p-0 pt-4">
          <div className="row m-0">
              <div className="col-4 rounded-pill">
                  <img src={props.image}  width='75px' height='75px' className='rounded-pill'/>
              </div>
              <div className="col-8">
                  <p className="fs-6">{props.name}</p>
                  <p className="fs-5">{props.type}</p>
              </div>
          </div>

          <Updatecustomer className="card" id={props.id} name={props.name} type={props.type}   updatecustomerdata={props.updatedata}/>      
    </div>
  );
}

export default Loyality
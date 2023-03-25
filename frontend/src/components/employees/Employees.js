import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import AddCustomer from '../customers/AddCustomer'
import Addcustomer from './Addcustomer'



const Employees = () => {
  const [customer, setCustomer] = useState()
  // let {id} = useParams();

  const addnewcustomer = (cname, ctype) =>{
    const data = {name: cname, ctype: ctype }
    fetch('http://localhost:8000/addnewcustomer/', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(response => {
              if (!response.ok){
                throw new Error('insert not complete error happened')
              }
              return response.json();
          }).then(() => {

          }).catch(e => {
            console.log(e)
          });
  }

  useEffect(() => {
    fetch('http://localhost:8000/customers')
    .then((response) => response.json())
    .then((data)=> {setCustomer(data.customersdata)})
  }, [])
  return (
    <div className='w-75'>
        <h2>العاملين</h2>
          <ul className='list-group'>
              {customer ? customer.map ((customerobject) => 
                <div href="#" className='list-group-item  border-secondary'  key={customerobject.id}>
                  <Link to={'/customerdata/'+ customerobject.id}  className='text-decoration-none d-flex justify-content-between text-secondary'>
                      <p>{customerobject.name}</p>
                      <p>{customerobject.ctype}</p>
                  </Link>
                </div>
                
              ):  <h1>No Employees</h1>}
          </ul>
          <Addcustomer addnewcustomer={addnewcustomer}/>
    </div>
  )
}

export default Employees


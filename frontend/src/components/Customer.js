import React from 'react'
import './styles/customer.css'
// import Client from './customers/Client'
// import Comanycustomer from './customers/Comanycustomer'
import Loyality from './customers/Loyality'
// import Smallcustomer from './customers/Smallcustomer'
import { useState } from 'react'
import  me from './static/images/me.JPG'
import AddCustomer from './customers/AddCustomer'

function Customer() {
    const [customers, setCustomers] = useState(
        [
          {'id': '1', 'name':"وليد محمد سعيد عثمان" ,'type':"عميل درجة اولى", 'image': me},
          {'id': '2', 'name':"سامح موسى محمد عمر" ,'type':"عميل ممتاز", 'image': me},
          {'id': '3', 'name':"مشاعر محمد سعيد عثمان" ,'type':"صغار العملاء", 'image': me},
          {'id': '4', 'name':"امنة ادم موسى" ,'type':"عميل ممتاز", 'image': me},
          {'id': '5', 'name':"مرتضى عبدالعزيز" ,'type':"صغار العملاء", 'image': me},
          {'id': '6', 'name':"يامن موسى محمد عمر" ,'type':"صغار العملاء", 'image': me},
          {'id': '7', 'name':"نسمة حامد محمد" ,'type':"عميل درجة اولى", 'image': me},
          {'id': '8', 'name':"لميس حامد محمد" ,'type':"عميل درجة اولى", 'image': me},
          {'id': '9', 'name':"خالد محمود ابراهيم" ,'type':"صغار العملاء", 'image': me},
        ]
    )
        
    const updatecustomer = (id, cname, ctype) => {
        console.log('name is waleed', id, cname, ctype)
        const updatecus = customers.map((customer) => {
            if (customer.id === id){
                return {...customers, name: cname, type: ctype, image: me}
              }
              else {
                return customer
              }
            });
            setCustomers(updatecus)
    }

    const addCustomer = (cid, cname, ctype)=> {
        const newcustomer = {id:cid, name:cname, type:ctype, image: me}
        // customers.push(newcustomer)
        setCustomers([...customers, newcustomer])
        // setCustomers(customers)
        console.log(customers)       
    }

  return (
      <>
          <div className="col-12 d-flex flex-wrap  py-4 justify-content-center">
              {customers.map((customer) => (
                <Loyality key={customer.id}  id={customer.id} name={customer.name} type={customer.type}  image={customer.image} updatedata={updatecustomer} />
                ))}      
          </div>
          <AddCustomer addCustomer={addCustomer}/>
      </>
  );
}

export default Customer
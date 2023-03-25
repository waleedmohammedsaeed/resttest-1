import React from 'react'
import { NavLink } from 'react-router-dom';


const navigation = [
  {name: 'Main', href:'/'},
  {name: 'Sales', href:'/sales'},
  {name: 'Customers', href:'/customers'},
  {name: 'Employees', href:'/employees'},
  {name: 'Marketing', href:'/marketing'},
];

// const mylogo = {'logo': logo}

const Navbar = (props) => {
  return (
    <div>
      <div className="row  lg:bg-primary bg-white">
        <div  className="d-flex justify-content-lg-between align-items-center shadow-sm pe-5">
            <div className='d-flex align-items-center'>
                <h2 >المنبر</h2>
            </div>
            {/* <div className="d-flex justify-content-evenly text-xlg fw-bold text-primary  navs align-items-center flex-3  w-75">
                <a href='#' className='text-decoration-none fs-5'>الرئيسية</a>
                <a href='#' className='text-decoration-none fs-5'>العمليات</a>
                <a href='#' className='text-decoration-none fs-5'>العملاء</a>
                <a href='#' className='text-decoration-none fs-5'>الموظفون</a>
                <a href='#' className='text-decoration-none fs-5'>عن</a>
            </div>   */}
            <div className='d-flex w-50 flex-wrap flex-md-nowrap text-primary'>
                  <NavLink
                    key={navigation[0].name}
                    to={navigation[0].href}
                    className="d-flex justify-content-evenly text-xlg fw-bold text-primary  navs align-items-center flex-3  w-75 text-decoration-none"
                  >الرئيسية</NavLink>
                  
                  <NavLink
                    key={navigation[1].name}
                    to={navigation[1].href}
                    className="d-flex justify-content-evenly text-xlg fw-bold text-primary  navs align-items-center flex-3  w-75 text-decoration-none"
                  >المبيعات</NavLink>
                  
                  <NavLink
                    key={navigation[2].name}
                    to={navigation[2].href}
                    className="d-flex justify-content-evenly text-xlg fw-bold text-primary  navs align-items-center flex-3  w-75 text-decoration-none"
                  >العملاء</NavLink>
                  
                  <NavLink
                    key={navigation[3].name}
                    to={navigation[3].href}
                    className="d-flex justify-content-evenly text-xlg fw-bold text-primary  navs align-items-center flex-3  w-75 text-decoration-none"
                  >العاملين</NavLink>
                  
                  <NavLink
                    key={navigation[4].name}
                    to={navigation[4].href}
                    className="d-flex justify-content-evenly text-xlg fw-bold text-primary  navs align-items-center flex-3  w-75 text-decoration-none"
                  >التسويق</NavLink>
            </div>
        </div>
      </div>
      <div className='min-vh-100 min-vw-100 text-primary d-flex justify-content-center pt-4'>
        {props.children}
      </div>
    </div>
  );
}

export default Navbar
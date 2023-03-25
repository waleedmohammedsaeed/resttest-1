import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Customerdata = () => {
  const navigate = useNavigate();
  const baseUrl = "http://127.0.0.1:800/";
  const { id } = useParams();
  const [cust, setCust] = useState();
  const [modifiedCust, setmodifiedCust] = useState();

  useEffect(() => {
    let url = "http://localhost:8000/customer/" + id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCust(data.customer);
        setmodifiedCust(data.customer);
      });
  }, []);

  const modify = () =>{
    const url = "http://localhost:8000/customer/" + id;
    fetch(url, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedCust)
    }).then(response => {return response.json}).then(data => console.log(data))
  }

  const deletecustomer = () => {
    const url = "http://localhost:8000/customer/" + id;
    fetch(url, { method: "DELETE" }).then((response) => {
      if (!response) {
        throw new Error("error !");
      }
      navigate("/employees");
    });
    console.log("delete customer");
  };

  return (
    <div className="d-flex flex-column mt-5">
      <div className="w-75">
        {cust ? (
          <div>
            {/* <h1>{cust.name}</h1>
                    <h2>{cust.ctype}</h2> */}
            <input
              type="text"
              value={modifiedCust.name}
              className="py-2 px-3 my-1"
              onChange={(e) => {setmodifiedCust({...modifiedCust, name:e.target.value})}}
            />
            <input
              type="text"
              value={modifiedCust.ctype}
              className="py-2 px-3 my-1"
              onChange={(e) => setmodifiedCust({...modifiedCust, ctype:e.target.value})}
            />
            {/* <input type="text" className='p-2 d-block' value={name} onChange{...setCust(cust.name)}/> */}
            {/* // <input type="text" className='p-2 d-block mt-2' value={type} onChange{...setType({type})}/> */}
          </div>
        ) : (
          <h1>Customer No found</h1>
        )}
      </div>
      <hr />
      {/* <a href="/employees">Back</a> */}
      <div>
        <Link to="/employees">back</Link>
      </div>
      <br />
      <div className="d-flex justify-content-evenly">
          <button className="btn btn-warning d-inline rounded-0"
                  // onClick={(e) => setmodifiedCust(modifiedCust)}
                  onClick={modify}
          >
            Modify
          </button>
          <button onClick={deletecustomer} className="btn btn-danger d-inline rounded-0 ">
            Delete
          </button>
      </div>
    </div>
  );
};

export default Customerdata;

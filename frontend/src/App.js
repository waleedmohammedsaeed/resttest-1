import './App.css';
import './components/bootstrap/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/bootstrap/node_modules/bootstrap/dist/js/bootstrap.min.js'
// import Navbar from './components/Navbar';
// import Content from './components/Content';
import Navbar from './components/nav/Navbar';
import Mainpage from './components/Mainpage/Mainpage';
import Customer from './components/Customer';
import Sales from './components/Sales/Sales';
import Employees  from './components/employees/Employees'
import Marketing  from './components/marketing/Marketing';
import Customerdata from './components/employees/Customerdata';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App container-fluid bg-light m-0">
      {/* <div className="sticky-sm-top"><Navbar/></div> */}
       <header>
          <BrowserRouter>
              <Navbar className="sticky-sm-top">
                  <Routes>
                      <Route path='/' element={<Mainpage/>} />
                      <Route path='/customers' element={<Customer/>} />
                      <Route path='/sales' element={<Sales/>} />
                      <Route path='/employees' element={<Employees/>} />
                      <Route path='/marketing' element={<Marketing/>} />
                      <Route path='/customerdata/:id' element={<Customerdata/>} />
                          {/* <div className="row  d-flex justify-content-center areacontent mt-3 bg-white"> */}
                              {/* <div className="col-12  col-md-8 p-0 row  d-flex justify-content-center areacontent mt-3 bg-white mx-auto">
                                <Customer />
                              </div> */}
                          {/* </div> */}
                  </Routes>
              </Navbar>
          </BrowserRouter>
       </header>
    </div>
  );
}
<script src='./components/bootstrap/node_modules/bootstrap/dist/js/bootstrap.min.js'></script>

export default App;

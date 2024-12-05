import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Customer from './bike_rent/Customer';
import Notfound from './bike_rent/NotFound';
import TempComp from './bike_rent/TempComp';
import Login from './bike_rent/Login';
 import './bike_rent/ProductList.css';
 import Products1 from './bike_rent/Products';
 import Pro1 from './bike_rent/Pro';
import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';
import RestaurantByCityz from './m';
import BR from './bike_rent/BR';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
  <div>
  <header className='header'>
    <nav>
      <ul> <h1>
        <li><Link to="/">Home</Link></li>
      
      
        <li><Link to="/Pr">Customer</Link></li>
      
      
        {/* <li><Link to="/RestaurantByCityz">Product</Link></li> */}
      
      
        <li><Link to="/Login">Login</Link></li>

        <li><Link to="/BR">Type</Link></li>
        </h1>
          {/* <input className='search' type='text' placeholder='Search Bike'
          name='search'/>  */}

      </ul>
      

    </nav>
  </header>
  </div>
     
      <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route  path='./Pr' element={<Customer/>}/>
          <Route path='./RestaurantByCityz' element={<RestaurantByCityz/>} />
          {/* dynamic route placeholder ":id"  replaced by value in url 
          <Route path='./Pro1' element={<New/>} />*/}
          <Route  path='/Product/:id' element={<TempComp/>}/>
          <Route  path='/*' element={<Notfound/>}/>
          <Route  path='/Login' element={<Login/>}/>
          <Route  path='/BR' element={<BR/>}/>
          
      </Routes>

 
</Router>
)


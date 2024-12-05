
import React, {Component} from 'react';
import ProductList from './ProductList';
import './ProductList.css';


class Navbar extends Component{  

    
    render (){
        return(
            
            <div className='n'>
            <div className='n1' > 
              <img className='i' src="https://wallpapercave.com/wp/wp4911793.jpg" alt="" />
              <span className='E'> “Riding a motorcycle isn’t just about the destination; it’s about the freedom of the open road and the thrill of the ride.” 🏍️</span>
              <p className='P'><h2> +EXTRA 5% OFF ON ALL ONLINE PAYMENTS </h2></p>
              
            </div>
            </div>

        )
    }
}

export default Navbar;
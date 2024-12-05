
import React, {Component} from 'react';
// import "./Product.css";
// import "./ProductList.css";
import './customer.css'


import ProductList from './Cus';
import JSON from './CustomerDb.json'
class Pr extends Component{  
    constructor(){
        super();
        this.state = {         
            title: 'Bike Rent',  
            Products:JSON         
        }
    }
    render (){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <ProductList Prodlist ={this.state.Products}/> 
            </div>

           
        )
    }
}

export default Pr;
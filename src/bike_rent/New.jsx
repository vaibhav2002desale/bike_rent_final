
import React, {Component} from 'react';
import "./Product.css"


import ProductList from './PL';
import JSON from './Db1.json'
class Pro1 extends Component{  
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

export default Pro1;
import { useState } from 'react';
import React from 'react' ;
import './ProductList.css';

    

const ProductList = (Prodlist) => {       


     const [count , setCount] = useState(0);                                        
    const renderLIist = ({Prodlist}) => {

        if(Prodlist){
            return Prodlist.map((data) => {
                return(
                    <div key={data.id}id="cus">
                         <img src={data.img} alt={data.CustomerName} />
  <h1>{data.CustomerName}</h1>
  <h2>{data.type}</h2>
  <p id="title">{data.Review}</p>
  <p id='R' > {data.R}  :      {data.rating}</p>
  
</div>
                        
                    
                )
            })
        }
    }
    return(
        <div classname="container">
            <div className="row">
                {renderLIist(Prodlist)}   
            </div>
        </div>
    )
}

export default ProductList;
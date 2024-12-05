import { useState } from 'react';
import React from 'react' ;
import './ProductList.css';

    

const ProductList = (Prodlist) => {       


     const [count , setCount] = useState(0);                                        
    const renderLIist = ({Prodlist}) => {

        if(Prodlist){
            return Prodlist.map((data) => {
                return(
                    <div key={data.id}className="card">
                         <img src={data.img} alt={data.name} />
  <h1>{data.name}</h1>
  <h2>{data.type}</h2>
  <p class="title">{data.description}</p>
  <p className='R' > {data.R}  :      {data.rating}</p>
  <h1>{data.price}</h1>
  <p><button onClick={() => setCount(count + 1) } > Rent Bikes </button></p>
  <button> Rent A Bike {count}</button>
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
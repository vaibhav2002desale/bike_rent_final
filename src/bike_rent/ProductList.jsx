import { useState } from 'react';
import React from 'react' ;
import './Product.css'

     

const ProductList = (Prodlist) => {      


    //  const [count , setCount] = useState(0);                                        
     const renderLIist = ({Prodlist}) => {

        if(Prodlist){
            return Prodlist.map((data) => {
                return(
                    <div key={data.id}id='card'>
                         <img src={data.img} alt={data.name} />
  <h1>{data.name}</h1>
  <h2>{data.type}</h2>
  <h5 class="title">{data.description}</h5> 
  <p className='R' > {data.R}  :      {data.rating}</p>
  <h1>{data.price}</h1>
  {/* <p><button onClick={() => setCount(count + 1) } > Rent Bikes </button></p> */}
  <button> Rent A Bike </button>
</div>
                        
                    
                )
            })
        }
     }
    return(
        <div id='container'>
            
            <div className="row">
                {renderLIist(Prodlist)}   
            </div>
        </div>
    )
}

export default ProductList;
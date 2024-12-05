import React from 'react'
import {Link} from 'react-router-dom';
import  './Db1.json'
import Products1 from './Products';
import RestaurantByCityz from './axios';

const BR = () => {
    return (
        <div>
<RestaurantByCityz/>    
        </div>
        
    )
};
export default BR;
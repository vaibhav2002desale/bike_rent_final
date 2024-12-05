import React, { useEffect, useState } from "react";
import axios from "axios";
import './axios.css'

const RestaurantByCityz = () => {
    const [bike, setBike] = useState([]);
    const [inputbike, setInputBike] = useState("");
    const [filteredBike, setFilteredBike] = useState([]);

    // Fetch restaurant data from API
    useEffect(() => {
        axios.get('http://localhost:5402/shoes')
            .then((res) => {
                console.log("API response:", res.data.list);
                setBike(res.data.list); // Assuming API response has a 'list' property
                setFilteredBike(res.data.list); // Initially, show all restaurants
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    // Input change handler
    const handleInputChange = (event) => {
        setInputBike(event.target.value);
    };

    // Filter logic triggered by Search button
    const handleSearch = () => {
        if (inputbike.trim()) {
            const cityToSearch = inputbike.trim().toLowerCase();
            const filtered = bike.filter(r => r.type.toLowerCase() === cityToSearch);
            setFilteredBike(filtered);
        } else {
            setFilteredBike(bike); // Show all restaurants if input is empty
        }
    };

    return (
        <div>
            <div className="ne">
            <input
                type="text"
                value={inputbike}
                onChange={handleInputChange}
                placeholder="Enter Bike Name"
            />
            <button onClick={handleSearch}>Search</button></div>
            {/* <p>Showing {filteredRestaurants.length} restaurants</p> */}
            {filteredBike.map(data => (
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
            ))}
        </div>
    );
};

export default RestaurantByCityz;
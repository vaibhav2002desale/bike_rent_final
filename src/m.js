import React, { useEffect, useState } from "react";
import axios from "axios";
import'./App.css'

const RestaurantByCityz = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [inputCity, setInputCity] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // Fetch restaurant data from API
    useEffect(() => {
        axios.get('http://localhost:5402/restaurants')
            .then((res) => {
                console.log("API response:", res.data.list);
                setRestaurants(res.data.list); // Assuming API response has a 'list' property
                setFilteredRestaurants(res.data.list); // Initially, show all restaurants
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    // Input change handler
    const handleInputChange = (event) => {
        setInputCity(event.target.value);
    };

    // Filter logic triggered by Search button
    const handleSearch = () => {
        if (inputCity.trim()) {
            const cityToSearch = inputCity.trim().toLowerCase();
            const filtered = restaurants.filter(r => r.price.toLowerCase() === cityToSearch);
            setFilteredRestaurants(filtered);
        } else {
            setFilteredRestaurants(restaurants); // Show all restaurants if input is empty
        }
    };

    return (
        <div>
            <div className="ne">
            <input
                type="text"
                value={inputCity}
                onChange={handleInputChange}
                placeholder="Enter City Name"
            />
            <button onClick={handleSearch}>Search</button></div>
            {/* <p>Showing {filteredRestaurants.length} restaurants</p> */}
            {filteredRestaurants.map(data => (
                            <div className="mxs">
                            <div  key={data.id} className="card__mxs">
                               <img src={data.img} />
                               <h1>{data.name}</h1>
                   
                              
                            </div>
                         </div>
            ))}
        </div>
    );
};

export default RestaurantByCityz;
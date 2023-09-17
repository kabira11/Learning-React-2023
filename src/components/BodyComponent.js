import { useState, useEffect } from 'react'
import { resData } from '../../assets/data'
import { RestaurantCards } from './RestaurantCards'

export const BodyComponent = () => {
    // State variable - Superpowerful variable
    const [restaurants, setRestaurants] = useState(resData)
    
    const handleClick = () => {
        console.log("clicked")
        const ListOfRestaurants = restaurants.filter(ele =>  ele.card.card.info.avgRating > 4)
        setRestaurants(ListOfRestaurants)
    }

    return (
        
        <div className='body'>
            {console.log("in render")}
            <div className='filter'>
                <button className='filter-btn'
                onClick={handleClick}>
                    Top Rated Restaurants
                </button>

                <button className='filter-all-btn'
                onClick={() => {
                    setRestaurants(resData)
                }}>
                    See All Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                   restaurants.map((restaurant , index) => <RestaurantCards key={restaurant.card.card.info.id} resDetails={restaurant} />) 
                   
                }
            </div>
        </div>
        )
    
}
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shimmer } from './Shimmer'

function RestaurantMenu() {

  // For gettting ID from route
  const {resId} = useParams()

    const [restaurantInfo,setRestaurantInfo] = useState(null)
    useEffect(() => {
      fetchMenu()
    },[])
  
    const  fetchMenu = async () => {
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5002129&lng=77.18649359999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
      const res = await data.json()
      console.log(res)
      setRestaurantInfo(res)
      }
      // Returning this befor destructing resolve undefined issue over destruction
      if (restaurantInfo == null) return  <Shimmer/>
      // Destructing
      const {name , cuisines } = restaurantInfo?.data?.cards[0]?.card?.card?.info
      // Destructing
      const {itemCards, costForTwoMessage } = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      console.log(itemCards)
  return (
            <div className='menu'>
            <h1>{name}</h1>
            <h3><span>{cuisines.join(", ")} </span>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
              {
                itemCards.map((item  : any)=> 
                <li key={item.card.info.id}>{item.card.info.name} - Rs {(item.card.info?.price && item.card.info?.price / 100 )|| (item.card.info?.defaultPrice && item.card.info?.defaultPrice/100)}</li>)
              }
            </ul>
            </div>
  )
}

export default RestaurantMenu

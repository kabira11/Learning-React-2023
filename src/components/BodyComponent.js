import { useState, useEffect } from "react";
// import { resData } from '../../assets/data'
import { RestaurantCards } from "./RestaurantCards";
import { Shimmer } from "./Shimmer";

export const BodyComponent = () => {
  // State variable - Superpowerful variable
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([])

  useEffect(() => {
    console.log("useEffect called");
    fetchdata();
  }, []);

  const fetchdata = async () => {
    // fetch method is present js engine method
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // ? is optional chaing
    const arrayOfCards =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurant_list = "restaurant_grid_listing";
    console.log(arrayOfCards);
    setRestaurants(arrayOfCards);
    setFilterRes(arrayOfCards)
  };

  const handleClick = () => {
    console.log("clicked");
    const ListOfRestaurants = restaurants.filter(
      (ele) => ele.info.avgRating > 4
    );
    setFilterRes(ListOfRestaurants)
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered");

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          name="search"
          label="search"
          className="search"
          onChange={handleChange}
          value={searchText}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredrestaurant = restaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredrestaurant)
            setFilterRes(filteredrestaurant)
          }}
        >
          Search
        </button>
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>

        <button
          className="filter-all-btn"
          onClick={() => {
            fetchdata();
          }}
        >
          See All Restaurants
        </button>
      </div>
      {restaurants?.length > 0 ? (
        <div className="res-container">
          {filterRes.map((restaurant, index) => (
            <RestaurantCards key={restaurant.info.id} resDetails={restaurant} />
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

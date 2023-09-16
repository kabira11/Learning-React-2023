import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import { resData } from './assets/data';

/*
* Header
*   - Logo
*   - nav Item
* Body
*   - search
*   - Restaurant Container
*       - RestaurantCard
*           - Img
*           - Name of Res, Ratings, cuisine, delivery time
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

const HeaderComponent = () => {
    return (
        <div className="header">
            <img className='logo' src='https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg'/>
            <div className='nav-items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Add Card
                    </li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCards = (props) => {
    const {resDetails } = props
    const { card } = resDetails
    return (
            <div className='res-card'>
                <h2>{card.card.info.name}</h2>
                <img className="res-card-pic" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+card.card.info.cloudinaryImageId}></img>
                <h4 className='cuisine'>{card.card.info.cuisines.join(',')}</h4>
                <h5><span className='ratings'>{card.card.info.avgRating}</span>&nbsp;&nbsp;&nbsp;Stars</h5>
                <h5>38 minutes</h5>
            </div>

    )
}

const BodyComponent = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {
                   resData.map((restaurant , index) => <RestaurantCards key={restaurant.card.card.info.id} resDetails={restaurant} />) 
                   
                }
                
            </div>
        </div>
        )
    
}

const AppComponent = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <BodyComponent />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppComponent/>)
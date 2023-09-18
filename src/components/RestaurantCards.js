// Named import using Curly Braces
import { CDN_URL } from '../utils/constants'

export const RestaurantCards = (props) => {
    const {resDetails } = props
  
    return (
            <div className='res-card'>
                <h2>{resDetails.info.name}</h2>
                <img className="res-card-pic" src={CDN_URL + resDetails.info.cloudinaryImageId}></img>
                <h4 className='cuisine'>{resDetails.info.cuisines.join(' , ')}</h4>
                <h5><span className='ratings'>&nbsp;&nbsp;{resDetails.info.avgRating}&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;Stars</h5>
                <h5>{resDetails.info.sla.deliveryTime} minutes</h5>
                <h5>{resDetails.info.areaName}</h5>
            </div>

    )
}
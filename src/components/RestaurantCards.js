// Named import using Curly Braces
import { CDN_URL } from '../utils/constants'

export const RestaurantCards = (props) => {
    const {resDetails } = props
    const { card } = resDetails
    return (
            <div className='res-card'>
                <h2>{card.card.info.name}</h2>
                <img className="res-card-pic" src={CDN_URL + card.card.info.cloudinaryImageId}></img>
                <h4 className='cuisine'>{card.card.info.cuisines.join(',')}</h4>
                <h5><span className='ratings'>&nbsp;&nbsp;{card.card.info.avgRating}&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;Stars</h5>
                <h5>{card.card.info.sla.deliveryTime} minutes</h5>
            </div>

    )
}
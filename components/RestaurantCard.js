import { REST_CARD_URL } from "./constants";

const RestaurantCard = (props) => {
    const { restData } = props;
    return (
        <div className='res-card'>
            <img className='res-logo' alt='Food Logo' src={`${REST_CARD_URL}${restData.cloudinaryImageId}`}></img>
            <h3  >{restData.name}</h3>
            <h4>{restData.cuisines.join(', ')}</h4>
            <h4 >{restData.avgRatingString}</h4>
            <h4 >{restData.slaString}</h4>
            <h4 >{restData.costForTwo}</h4>
        </div>
    )
}


export default RestaurantCard;
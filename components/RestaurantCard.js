const RestaurantCard = (props) => {

    const { restData} =  props;

    return (
        <div className='res-card'>
            <img className='res-logo' alt='Food Logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restData.cloudinaryImageId}></img>
            <h3 style={{ paddingLeft: '15%'}}>{restData.name}</h3>
            <h4>{restData.cuisines.join(', ')}</h4>
            <h4 >{restData.avgRatingString}</h4>
            <h4 >{restData.slaString}</h4>
            <h4 >{restData.costForTwo}</h4>
        </div>
    )
}


export default RestaurantCard;
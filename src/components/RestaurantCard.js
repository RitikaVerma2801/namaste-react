import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRatingString } =
      resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <div className="res-details">
          <span>{avgRatingString} stars</span>
          <span>{resData.info.sla.deliveryTime} minutes</span>
        </div>
        <div className="res-color">
          <span>{cuisines.join(", ")}</span>
          <p>{costForTwo}</p>
        </div>
      </div>
    );
  };

export default RestaurantCard;
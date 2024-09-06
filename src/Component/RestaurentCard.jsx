import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    // console.log(props.resData?.restaurants[0]?.info?.cloudinaryImageId)
    const { resData } = props;
    return (
        <div className="card" >
            <img
                className="res-logo"
                src={CDN_URL + resData?.info?.cloudinaryImageId}
                alt="image"
            />
            <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines.join(",")}</h4>
            <h4>{resData?.info?.avgRating}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} mins</h4>
        </div>
    );
};
export default RestaurentCard;
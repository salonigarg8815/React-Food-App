import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=426730&submitAction=ENTER"
        )

        const Json = await data.json();
        console.log(Json)
        setResInfo(json.data)
    }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisions, costForTwoMessage, city } = resInfo.cards[2].card.card?.info;



    return (
        <div className="menu">
            <h1></h1>
            <h2>{city}</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li> Ice-creame</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;
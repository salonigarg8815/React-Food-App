import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";

const Body = () => {
    const [listOfRestro, setListOfRestro] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterRestro, setFilterRestro] = useState([]);

    // wheneve state variable update, react re-render the component.

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.222737&lng=78.206524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.222737&lng=78.206524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //optional chaining
        setListOfRestro(
            json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilterRestro(
            json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    // conditional rendering
    return listOfRestro.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">

                    <input type="text" className="searchBox" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />

                    <button onClick={() => {
                        const filteredrestro = listOfRestro.filter((res) => {
                            res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        }
                        )
                        setListOfRestro(filteredrestro)

                    }}>Search</button>

                </div>
                <button className="btn" onClick={() => {
                    const filterData = listOfRestro.filter((res) =>
                        res.info.avgRating > 4.2
                    );
                    // console.log(filterData)
                    setListOfRestro(filterData)
                }}>Top Rated Restro</button>
            </div>
            <div className="res-container">
                {filterRestro.map((res) => {
                    return <RestaurentCard key={res.info.id} resData={res} />

                })

                }

                {/* <RestaurentCard resData={resList[0]} />
                <RestaurentCard resData={resList[1]} />
                <RestaurentCard resData={resList[2]} />
                <RestaurentCard resData={resList[3]} />
                <RestaurentCard resData={resList[4]} />
                <RestaurentCard resData={resList[5]} />
                <RestaurentCard resData={resList[6]} /> */}
            </div>
        </div>
    )
}
export default Body;
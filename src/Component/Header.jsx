import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Header = () => {
    // let btnName = "login"
    const [btnName, setBtnName] = useState("login")

    // if there is no dependancy array --> useEffect is Called every time after the component has rendard.
    // if there is paas empty dependanct array --> useEffect is called only one time 
    // if there is paas the value of array --> then it will called depends on value
    // useEffect(() => {
    //     console.log("useEffect Called")
    // })

    return (
        <div className="header">
            <div className='logo'>
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/About'>About</Link> </li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li> Services</li>
                    <li> Cart</li>
                    <li> <button className="login" onClick={() => {
                        btnName === 'login' ? setBtnName('logout') : setBtnName('login')

                    }}> {btnName} </button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
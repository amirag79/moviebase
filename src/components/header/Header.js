import React from "react"
import "./Header.css"
//Link is component of react-router-dom used to create navigation links in our app
//when user clicks on link, it will navigate them to URL path without causing full page reload.
import { Link } from "react-router-dom"

//importing logo of the app
import logo from "./logo1.png"

//Header component, it has arrow function which is anonymous and takes no argument()
const Header = () => {

    //return() means when the Header component will be rendered, it will generate all code inside()
    return (
        <div className="header">
            <div className="headerLeft">

                {/* it means when click on logo, return to homepage */}
                <Link to="/"><img className="header__icon" src={logo} /></Link>
                
                {/*when click on popular, return to App.js line 30, in movies/:type, type is 
                popular,top_rated, upcoming ....basically it will direct us to list of popular movie*/}
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header
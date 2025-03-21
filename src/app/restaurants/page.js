'use client'
import { useState } from "react";
import RestaurantsSignUp from "../_Components/RestaurantSignUp";
import RestaurantsLogin from "../_Components/RestaurantsLogin";
import './style.css';
import RestaurantHeader from "../_Components/RestaurantHeader";
import RestaurantFooter from '../_Components/RestaurantFooter';

const Restaurants = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className="container">
                <RestaurantHeader />
                <h1>restaurants login</h1>
                {
                    login ? <RestaurantsLogin /> : <RestaurantsSignUp />
                }
                <button onClick={() => setLogin(!login)} className="button-link">
                    {
                        login ? "do not have account? Signup" : "Already have account ? Login"
                    }
                </button>
                <RestaurantFooter />
            </div>
        </>
    )
}

export default Restaurants;
import React from "react";

const RestaurantsLogin = () => {
    return(
        <>
        <div>
            <h1>Login Components</h1>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your email" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantsLogin;
import { useRouter } from "next/router";
import React, { useState } from "react";

const RestaurantsLogin = () => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = async() =>{
        if(!email || !password){
            setError(true);
            return false;
        }else{
            setError(false);
        }
        let response = await fetch("http://localhost:3000/api/restaurant",{
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                login:true
            })
        });
        response = await response.json();
            if(response.success){
                const {result} = response;
                delete result.password;
                localStorage.setItem("restaurantUser", JSON.stringify(result));
                router.push("/restaurant/dashboard");
            }else {
                alert("login failes");
            }
    }
    return(
        <>
        <div>
            <h1>Login Components</h1>
            <div>
                <div className="input-wrapper">
                    <input value={email} type="text" placeholder="enter your email" className="input-field" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                {
                    error && !email && <span className="input_error">Please enter Valid Email</span>
                }
                <div className="input-wrapper">
                    <input value={password} type="password" placeholder="enter your password" className="input-field" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                {
                    error && !password && <span className="input_error">Please enter Valid password</span>
                }
                <div className="input-wrapper">
                    <button className="button">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantsLogin;
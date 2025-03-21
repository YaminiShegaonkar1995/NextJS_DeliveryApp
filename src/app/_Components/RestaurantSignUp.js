'use client'
import { useRouter } from "next/router";
import React, { useState } from "react";

const RestaurantsSignUp = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[c_password, setc_password] = useState('');
    const[name, setName] = useState('');
    const[city, setCity] = useState('');
    const[address, setAddress] = useState('');
    const[contact, setContact] = useState('');
    const router = useRouter();
    const[error, setError] = useState(false);
    const[passwordError, setPasswordError] = useState(false);

    const handleSignUp = async() => {
        if(password !== c_password){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
        }
        if(!email || !password || !c_password || !name || !city || !address || !contact){
            setError(true);
        }
        else{
            setError(false);
        }
        console.log(email,password, c_password, name, city, address, contact);
        let response = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body: JSON.stringify({
                email,
                password,
                name,
                city,
                address,
                contact
            })
        })
        result = await response.json();
        console.log(result);
        if(response.success){
            console.log(response);
            const {result} = response;
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result)); 
            router.push("/restaurant/dashboard");
        }
    }
    return(
        <>
        <div>
            <h1>Login Components</h1>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your email" 
                    value={email} className="input-field" onChange={(event)=>setEmail(event.target.value)} />
                </div>
                {
                    error && !email && <span className="input_error">please enter valid email</span>
                }
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your password"
                    value={password} className="input-field" onChange={(event)=>setPassword(event.target.value)} />
                </div>
                {
                    passwordError && <span className="input_error">password and confirm password not match</span>
                }
                {
                    error && !password && <span className="input_error">please enter valid password</span>
                }
                <div className="input-wrapper">
                    <input type="password" placeholder="enter Confirm password"
                    value={c_password} className="input-field" onChange={(event)=>setc_password(event.target.value)} />
                </div>
                {
                    passwordError && <span className="input_error">password and confirm password not match</span>
                }
                {
                    error && !c_password && <span className="input_error">please enter valid password</span>
                }
                <div className="input-wrapper">
                    <input type="text" placeholder="enter restaurant name"
                    value={name} className="input-field" onChange={(event)=>setName(event.target.value)} />
                </div>
                {
                    error && !name && <span className="input_error">please enter valid restaurant name</span>
                }
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your city"
                    value={city} className="input-field" onChange={(event)=>setCity(event.target.value)} />
                </div>
                {
                    error && !city && <span className="input_error">please enter valid city name</span>
                }
                <div className="input-wrapper">
                    <input type="number" placeholder="enter your phone number"
                    value={contact} className="input-field" onChange={(event)=>setContact(event.target.value)} />
                </div>
                {
                    error && !contact && <span className="input_error">please enter valid contact</span>
                }
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your Full Address"
                    value={address} className="input-field" onChange={(event)=>setAddress(event.target.value)} />
                </div>
                {
                    error && !address && <span className="input_error">please enter valid address</span>
                }
                <div className="input-wrapper">
                    <button className="button" onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantsSignUp;
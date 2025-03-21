'use client'
import React, { useState } from "react";

const RestaurantsSignUp = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[c_password, setc_password] = useState('');
    const[name, setName] = useState('');
    const[city, setCity] = useState('');
    const[address, setAddress] = useState('');
    const[contact, setContact] = useState('');

    const handleSignUp = async() => {
        console.log(email,password, c_password, name, city, address, contact);
        let result = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body: JSON.stringify({
                email,
                password,
                name,
                city,
                address,
                contact
            })
        });
        result = await result.json();
        console.log(result);
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
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your password"
                    value={password} className="input-field" onChange={(event)=>setPassword(event.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter Confirm password"
                    value={c_password} className="input-field" onChange={(event)=>setc_password(event.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter restaurant name"
                    value={name} className="input-field" onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your city"
                    value={city} className="input-field" onChange={(event)=>setCity(event.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="number" placeholder="enter your phone number"
                    value={contact} className="input-field" onChange={(event)=>setContact(event.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your Full Address"
                    value={address} className="input-field" onChange={(event)=>setAddress(event.target.value)} />
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantsSignUp;
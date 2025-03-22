import { useState } from "react";

const AddFoodItem = () => {
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[path, setPath] = useState("");
    const[description, setDescription] = useState("");
    const[error, setError] = useState(false);

    const handleAddFoodItem = async() => {
        console.log(name, price, path, description);
        if(!name || !price || !path || !description){
            setError(true);
            return false;
        }
        else{
            setError(false);
        }
        let restro_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        if(restaurantData){
            restro_id = restaurantData._id;
        }
        let response = await fetch("http://localhost:3030/api/restaurant/foods",{
            method: "POST",
            body: JSON.stringify({
                name,
                price,
                path,
                description,
                restro_id,
            })
        });
        response = await response.json();
        if(response.success){
            alert("Food Item Added Successfully");
        }
        else{
            alert("Food Item not Added Successfully");
        }
    }

    return(
        <>
        <div className="container">
        <h1>food items</h1>
        <div className="input-wrapper">
                    <input value={name} type="text" placeholder="Please enter Food name..... " className="input-field" onChange={(e)=>setName(e.target.value)} />
        </div>
        {
            error && !name && <span className="input_error">Please Enter Valid Name....</span>
        }
        <div className="input-wrapper">
                    <input value={price} type="text" placeholder="Please enter Food Price..... " className="input-field" onChange={(e)=>setPrice(e.target.value)} />
        </div>
        {
            error && !price && <span className="input_error">Please Enter Valid Price....</span>
        }
        <div className="input-wrapper">
                    <input value={path} type="text" placeholder="Please enter Food Path..... " className="input-field" onChange={(e)=>setPath(e.target.value)} />
        </div>
        {
            error && !path && <span className="input_error">Please Enter Valid path....</span>
        }
        <div className="input-wrapper">
                    <input value={description} type="text" placeholder="Please enter Food description..... " className="input-field" onChange={(e)=>setDescription(e.target.value)} />
        </div>
        {
            error && !description && <span className="input_error">Please Enter Valid Description....</span>
        }
        <div className="input-wrapper">
                    <button className="button" onClick={handleAddFoodItem}>Add Food Items</button>
        </div>
        </div>
        </>
    )
}
export default AddFoodItem;
'use client'
import { useState } from "react";

const EditFoodItem = (props) => {
    console.log(props.params.id);
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[path, setPath] = useState("");
    const[description, setDescription] = useState("");
    const[error, setError] = useState(false);

    const handleEditFoodItem = async() => {
        console.log(name, price, path, description);
        if(!name || !price || !path || !description){
            setError(true);
            return false;
        }
        else{
            setError(false);
        }
    }

    return(
        <>
        <div className="container">
        <h1>update food items</h1>
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
                    <button className="button" onClick={handleEditFoodItem}>update Food Items</button>
        </div>
        <div className="input-wrapper">
                    <button className="button" onClick={()=>router.push('../dashboard')}>Back to Food Items List</button>
        </div>
        </div>
        </>
    )
}
export default EditFoodItem;
import { useState } from "react";

const FoodItemList = () => {

    const[foodItems, setFoodItems] = useState();

const useEffect = (()=> {
    LoadFoodItems();
},[]);

const LoadFoodItems = async() => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    const   resto_id = restaurantData._id;
    let response = await fetch("http://localhost:3030/api/restaurant/foods/"+resto_id);
    response = await response.json();
    if(response.success){
        setFoodItems(response.result);
    }else{
        alert("NO Food ITEMS FOUND");
    }
}
    return(
        <>
        <h1>foof Items </h1>
        <table>
            <thead>
                <tr>
                    <td>Serial No.</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operations</td>
                </tr>
            </thead>
            <tbody>
                {
                    foodItems && foodItems.map((item, key)=>{
                    <tr key={key}>
                    <td>{key + 1 }</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img src={item.img_path} /></td>
                    <td><button>Delete</button><button>Edit</button></td>
                </tr>
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default FoodItemList;
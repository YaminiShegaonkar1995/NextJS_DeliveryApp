import { useRouter } from "next/router";
import { useState } from "react";

const FoodItemList = () => {

    const[foodItems, setFoodItems] = useState();
    const router = useRouter();

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

const deleteFoodItem = async(id) => {
    let response = await fetch("http://localhost:3030/api/restaurant/foods/"+id, {
        method: "DELETE"
    });
    response = await response.json();
    if(response.success){
        LoadFoodItems();
    }else{
        alert("Food Item not Deleted");
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
                    <td><button onClick={()=>deleteFoodItem(item._id)}></button></td>
                    <td><button onClick={()=>router.push('dashboard/'+item._id)}>Delete</button><button>Edit</button></td>
                </tr>
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default FoodItemList;
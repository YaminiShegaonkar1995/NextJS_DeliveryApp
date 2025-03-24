'use client'
import RestaurantHeader from "@/app/_Components/RestaurantHeader";
import "../../styles.css";
import AddFoodItem from "@/app/_Components/AddFoodItem";
import { useState } from "react";
import FoodItemList from "@/app/_Components/FoodItemList";

const Dashboard=()=>{
    const[addItem, setAddItem] = useState(false);
    return(
        <div>
            <RestaurantHeader />
            <button onClick={()=>setAddItem(true)}>Add Food</button>
            <button onClick={()=>setAddItem(false)}>Dashboard </button>
            {
            addItem ? <AddFoodItem setAddItem={setAddItem} /> : <FoodItemList />
            }
            
        </div>
    )
}
export default Dashboard;
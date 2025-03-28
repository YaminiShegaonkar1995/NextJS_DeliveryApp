import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const data = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({result:true})
}

export async function POST(request){
    let payload = await request.json();
    let result;
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    if(payload.login){
        //use this api for login
        result = await restaurantSchema.findOne({email:payload.email, password:payload.password});
    }else{
        const restaurant = new restaurantSchema(payload);
        result = await restaurant.save();
    }
    return NextResponse.json({result,success:true})
}
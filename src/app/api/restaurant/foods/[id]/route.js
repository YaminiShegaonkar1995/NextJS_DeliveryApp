import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { Content } from "next/font/google";
import { NextResponse } from "next/server";

export async function POST(request){
    const id = Content.params.id;
    let success = false;
    await mongoose.connect(connectionStr, {userNewURLParser:true});
    const result =  await foodSchema.find({resto_id:id});
    if(result){
        success = true;
    }
    return NextResponse.json({result, success});
}

export async function DELETE(request, Content){
    const id = Content.params.id;
    let success = false;
    await mongoose.connect(connectionStr, {userNewURLParser:true});
    const result = foodSchema.deleteOne({_id:id})
    if(result){
        success = true;
    }
    return NextResponse.json({result, success});
}
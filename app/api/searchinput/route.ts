import { dbConnect } from "@/lib/dbConnect";
import { SearchInput } from "@/model/SearchInput";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    await dbConnect()
try {
    const body=await req.json()
    const {searchInput,user}=body
    if(searchInput.trim()==="") throw new Error("Input is Empty")
    const inputExist=await SearchInput.findOne({searchInput})
    if(inputExist) return NextResponse.json(inputExist,{status:201});
    const inputCreated=await SearchInput.create({searchInput,user})
    if(!inputCreated) throw new Error("Failed to save user Input")
    return NextResponse.json(inputCreated,{status:201})

} catch (error) {
    console.log("Error",error)
    return NextResponse.json(error,{status:400})
}
}
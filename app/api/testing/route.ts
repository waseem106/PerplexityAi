import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json("working",{status:200})
}
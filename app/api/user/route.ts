import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/model/User";
import { NextResponse } from "next/server";



export async function POST(req:Request) {
 await dbConnect();
  try {
    const body = await req.json();
    const {action}=body

    if (action === "create") {
      const { name, email } = body;
      if ([name, email].some((value) => value?.trim() === ""))
        throw new Error("Validation Error");
      const isUserExist = await User.findOne({ email });
      if (isUserExist) return NextResponse.json("User already exist",{status:400})
      const userData = await User.create({ name, email });
      if (!userData) return NextResponse.json("Failed to create user",{status:400});
      console.log("User created Successfully Api", userData);
      return NextResponse.json(userData, { status: 201 });
    }

    if(action==="find")
    {
        const {email}=body;
        console.log("email recieved at backend",email)
        if(email.trim()==="")return NextResponse.json("Email is empty",{status:400})
        const res=await User.findOne({email})
        console.log("response for user search",res)
        if(!res) return NextResponse.json("User not found",{status:400})
        console.log("User find",res)
        return NextResponse.json(res,{status:201})
        
    }
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { error: error || "Internal Server Error" },
      { status: 400 }
    );
  }
}


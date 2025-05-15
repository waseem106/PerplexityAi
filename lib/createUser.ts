import { User } from "@/model/User"
import { dbConnect } from "./dbConnect"

export const createUser=async (user:any)=>{
    try {
        await dbConnect()
        if(!user) throw new Error("user is empty")
        const name=user?.fullName
        const email=user?.emailAddresses[0]?.emailAddress
        if([name,email].some((value)=>value?.trim()==="")) throw new Error("Validation Error")
        const isUserExist=await User.findOne({email})
        if(isUserExist) throw new Error("User Already Exist ")
        const userData=await User.create({name,email})
        if(!userData) throw new Error("Failed to create the User")
        console.log("User created Successfully",userData)
    } catch (error) {
        console.log("Error",error)
    }
}
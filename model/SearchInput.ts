import mongoose, { Document, Schema } from "mongoose";


export interface SearchInputSchemaI extends Document{
    searchInput:string,
    user:mongoose.Types.ObjectId,
    createdAt?:Date,
    updatedAt?:Date
}

const searchInputSchema:Schema<SearchInputSchemaI>=new mongoose.Schema({
    searchInput:{
        type:String,
        default:null
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
     
},{timestamps:true})



export const SearchInput= mongoose.models.SearchInput as mongoose.Model<SearchInputSchemaI> ||  mongoose.model<SearchInputSchemaI>('SearchInput',searchInputSchema)
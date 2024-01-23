import mongoose from "mongoose";



export const connectDB = ()=>{
    mongoose.connect(process.env.mongo_uri,{
    dbName:"backendapi",
})
.then(()=> console.log("Database Connected"))
.catch((e)=> console.log(e));
}
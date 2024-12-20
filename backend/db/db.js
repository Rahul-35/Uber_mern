import mongoose from "mongoose";

export default async function connectDB(){
    try{
    const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log("Host connected: ",conn.connection.host);
}
    catch(err){
        console.log(err)
    };
}
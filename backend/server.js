import app from "./app.js";
import http from "http";
import connectDB from "./db/db.js";


const PORT=process.env.PORT || 3000;
const server=http.createServer(app);

server.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

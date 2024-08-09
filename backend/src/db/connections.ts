import {connect} from "mongoose";
import { disconnect } from "mongoose";
async function connectToDatabase(){
    try{
        await connect (process.env.MONGODB_URL);
    } catch(error){
        console.log(error);
        throw new Error("Can't connect to database.")
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch(error){
        console.log(error);
        throw new Error ("Could not Disconnect from MongoDB");
    }
}

export {disconnectFromDatabase, connectToDatabase};
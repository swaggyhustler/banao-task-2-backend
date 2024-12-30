import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        const conn = mongoose.connect(process.env.MONGO_URL);
    }catch(e){
        console.log('Cannot connect to Database');
        console.log(e)
    }
}

export {connectDB};
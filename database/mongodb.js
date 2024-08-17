import mongoose from "mongoose";
import 'dotenv/config';

// const uri = `mongodb://localhost:27017/`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bgw1n6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const database = () => {
    mongoose.connect(uri, { dbName: "product_Hunt" })
        .then(() => {
            console.log("Database is connected....");
        })
        .catch(error => {
            console.log(error);
        })
}
import mongoose from "mongoose";

const {connect} = mongoose;

const conectionDataBase = () => {
    connect('mongodb://localhost:27017/cars-store-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected database");
    })
    .catch((err) => {
        console.log(`Error conection for MongoDB: ${err}`)

    }); 
};

export default conectionDataBase
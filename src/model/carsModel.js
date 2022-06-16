import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CarsSchema =  new Schema(
    {
        model: { type: String, required: true, unique: true},
        brand: { type: String, required: true},
        year: { type: Number, required: true},
        image: { type: String, required: true},
        price: { type: Number, required: true},
    }, 
    { versionKey: false}
);

const Cars = model('cars', CarsSchema);

export default Cars;


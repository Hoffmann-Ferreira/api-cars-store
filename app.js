import express from "express";
import cors from "cors";
import carsRoutes from "./src/routes/cars.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function (req, res){
    res.send('Hello World');
});

app.use('/cars', carsRoutes)

export default app



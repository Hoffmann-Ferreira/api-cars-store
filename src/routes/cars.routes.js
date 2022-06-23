import { Router } from "express";
import CarsControllers from "../controllers/cars.controllers.js";
import checkDataMiddleware from "../middlewares/checkDataCars.middleware.js";

const carsRoutes = Router();
const carsControllers = new CarsControllers();

//rotas utilizadas com funções que devem se utilizadas ao acessar a rota
carsRoutes.get('/list-all', carsControllers.listAll);

carsRoutes.get('/car/:id', carsControllers.searchCar);

carsRoutes.delete('/delete-car/:id', carsControllers.deleteCar);

carsRoutes.post('/register-cars',checkDataMiddleware, carsControllers.registerCars);

carsRoutes.put('/edit-car/:id', carsControllers.editCar)


export default carsRoutes;
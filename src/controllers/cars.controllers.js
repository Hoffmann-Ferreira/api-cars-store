import CarsServices from "../services/cars.service.js";

const carsServices = new CarsServices(); //intanciando o service para trabalhar com ele em um objeto

class CarsControllers {
    async listAll(req, res) {
        try{
            const cars = await carsServices.listAll();
            res.send(cars)
        }
        catch (error){
            res.status(error.status).send(error.message);
        }
    }

    async searchCar (req, res){

        try{
            const id = req.params.id;

        const car = await carsServices.searchCar({ id });

        res.send(car);

        }
        catch(error){
            res.status(404).send('not found')
        };
    }

    async deleteCar (req, res){
        
        try{
            const id = req.params.id;

            const carDelete = await carsServices.deleteCar({id});

            res.status(200).send(carDelete);
        }
        catch(error){
            res.status(304).send('could not delete');
        };
    }

    async registerCars(req, res){
        const {model, brand, year, image, price } = req.body;

        try{
            const newCar = await carsServices.registerCars({
                model,
                brand,
                year, 
                image,
                price
            });

            res.status(201).send(newCar);
        }
        catch (error){
            if( error.code === 11000){

            res.status(417).send('Error when registering')
            }
        };
    }

    async editCar (req, res){
         const {model, brand, year, image, price} = req.body
         const id = req.params.id

         try{
            const car = await carsServices.editCar({model, brand, year, image, price, id});

            res.status(200).send(car);
         }
         catch(error){
            res.status(304).send('not modified')
         }
    }
}

export default CarsControllers

import Cars from "../model/carsModel.js";

class CarsServices {
    async listAll () {
        const listCars = await Cars.find(); //listando todos os carros

        if( listCars.length === 0){
            throw { status: 404, message: 'no car registered'} //menssagem 
        } 

        return listCars
    }

    async searchCar ({id}) {
        const selectCar = await Cars.findById(id).exec();
        
        return selectCar
    }

    async deleteCar ({id}) {
        const carDelect = await Cars.findByIdAndDelete(id);
        
        return carDelect
    }

    async registerCars ({model, brand, year, image, price  }) {
        const newCar = {
            model,
            brand,
            year, 
            image,
            price
        };

        const car = await Cars.create(newCar)

        return car;
    }

    async editCar ({model, brand, year, image, price, id}) {
        const modification = {
            model,
            brand,
            year,
            image,
            price
        };

        await Cars.updateOne({_id: id}, modification);

        const carModified = await Cars.findById(id);

        return carModified;
    }

   
};

export default CarsServices
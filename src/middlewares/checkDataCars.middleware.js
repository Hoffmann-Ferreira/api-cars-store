const checkDataMiddleware = (req, res, next) => {
     const {model, brand, year, image, price} = req.body

     if(!model || !brand || !year || !image || !price) {
         return res.status(206).send('blank field, please fill all')
     }

     next()

}

export default checkDataMiddleware;
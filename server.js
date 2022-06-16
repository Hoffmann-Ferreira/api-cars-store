import app from './app.js';
import conectionDataBase  from './src/database/index.js';

const port = 3015;
app.listen(port,() => {
    conectionDataBase()
    console.log(`running in the port ${port}`)
});
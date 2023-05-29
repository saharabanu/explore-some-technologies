import mongoose from 'mongoose';
import app from './app';

const port:number = 8000;

 
// mongoose connect

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Database connection successfully");
        

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    } catch (error) {
        console.log("Failed to connect database", error)
        
    }
  

 
}
 bootstrap()





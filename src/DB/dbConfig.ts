import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(`mongodb+srv://adminhrm:amdin07antu@cluster0.kxborby.mongodb.net/HRM`);
        const connection = await mongoose.connection;

        connection.on('connected', async () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);

    }


}
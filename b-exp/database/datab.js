const mongoose = require('mongoose');

const data_base = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Try Again');
    }
}

module.exports = data_base;
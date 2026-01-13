const mongoose = require("mongoose");

const URI = "mongodb+srv://garretts8:smdmzag6@cluster0.hu0obbr.mongodb.net/";

const connectDB = async() =>{
    await mongoose.connect(URI);
    console.log("db connected..!")
}

module.exports = connectDB
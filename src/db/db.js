const mongoose=require('mongoose');
async function connectDB(){
    await mongoose.connect("mongodb+srv://mai:3F83uc6PhomudThM@cluster1.tofbvnf.mongodb.net/maithri")
    console.log("connected to database")
}
module.exports=connectDB;
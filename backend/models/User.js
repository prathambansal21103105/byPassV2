const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    mobileNumber:String,
    city:String,
    code:String,
    car:String,
    type:String,
    color:String,
    carNum:String,
    rating:String
})
const User = mongoose.model('User',userSchema);
module.exports = User;
const mongoose =require('mongoose');
const rideSchema = new mongoose.Schema({
    source:String,
    destination:String,
    startDate:String,
    destinationDate:String,
    driverName:String,
    driverRating:String,
    driverId:String,
    passengerId:String,
    carName:String,
    carNumber:String,
    carType:String,
    driverContact:String,
    passengerContact:String,
})
const Ride = mongoose.model('Ride',rideSchema);
module.exports = Ride;
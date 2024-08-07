const mongoose =require('mongoose');
const notificationSchema = new mongoose.Schema({
    source:String,
    destination:String,
    startDate:String,
    destinationDate:String,
    driverId:String,
    driverName:String,
    driverContact:String,
    driverRating:String,
    passengerId:String,
    passengerName:String,
    passengerContact:String,
    carName:String,
    carNumber:String,
    carType:String,
    status:String,
    rideId:String,
})
const Notification = mongoose.model('Notification',notificationSchema);
module.exports = Notification;
import carImg from '../Images/carFinal1.png';

const Ride=({ride})=>{
    console.log(ride);
    const startTime = ride.startDate.substring(0,5);
    const endTime = ride.destinationDate.substring(0,5);
    let date = ride.startDate;
    date+=" ";
    const startDate = ride.startDate.substring(11,17);
    return(
        <div className="rideCard">
            <div className="innerCard">
                <div className="left">
                {ride.source}
                <br/>
                <span className="boldR">{startTime}</span>
                </div>
                <div className="middle">
                <span className="boldW">{startDate}</span>
                <img src={carImg} className="car"></img>
                </div>
                <div className="right">
                {ride.destination}
                <br/>
                <span className="boldR">{endTime}</span>
                </div>
            </div>
        </div>
    );
}

export default Ride;
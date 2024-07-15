import carImg from '../Images/carFinal1.png';

const Ride=({ride})=>{
    return(
        <div className="rideCard">
            <div className="innerCard">
                <div className="left">
                {ride["source"]}
                <br/>
                <span className="boldR">{ride["start"]}</span>
                </div>
                <div className="middle">
                <span className="boldW">{ride["date"]}</span>
                <img src={carImg} className="car"></img>
                </div>
                <div className="right">
                {ride["destination"]}
                <br/>
                <span className="boldR">{ride["end"]}</span>
                </div>
            </div>
        </div>
    );
}

export default Ride;
import phone from '../Images/phone.jpeg';
import location from '../Images/location.jpeg';
import fax from '../Images/fax.jpeg';
import email from '../Images/email.jpeg';

const Help=()=>{
    return(
    <>
    <div className="helpTitle">
        <h1>How can we help you?</h1>
        <div className="text">
        Welcome to the byPass Help Page! Here you'll find answers to common questions and guidance on how to use our app to make your carpooling experience smooth and enjoyable.
        To get started, sign up by entering your name, email, phone number, and creating a password. You will need to verify your email and phone number through the verification codes sent to you. If you already have an account, simply log in by entering your registered email and password and clicking "Submit."
        Finding a carpool is easy. Enter your pickup location, destination, and preferred time, then click "Search" to view available carpool options. Browse through the list of available rides, click on a ride to view more details about the driver, route, and car, and select the ride that best suits your needs by clicking "Request to Join." If you want to offer a ride, click on "Offer a Ride," enter your starting point, destination, date, and time, specify the number of available seats and any preferences for passengers, and click "Post Ride." You can then manage requests from passengers interested in joining your ride by approving or declining them based on your preferences.
        </div>
    </div>
    <div className="helpRoot">
        <div className="helpUser">
            <div className="userSub">
                <div className='entity'>
                <img src={location} className='helpImg'></img>
                <span className='bold'>Location</span>
                <br></br>
                Mountain View, CA 94043, United States
                </div>
            </div>
        </div>
        <div className="helpInfo">
            <div className="infoSub">
                <div className='entity'>
                <img src={phone} className='helpImg'></img>
                <span className='bold'>Phone</span>
                <br></br>
                99988 87779
                <br></br>
                99998 88889
                </div>
            </div>
        </div>
    </div>
    <div className="helpRoot">
        <div className="helpUser">
            <div className="userSub">
                <div className='entity'>
                <img src={fax} className='helpImg'></img>
                <span className='bold'>Fax Info</span>
                999-99999
                <br></br>
                999-98888
                </div>
            </div>
        </div>
        <div className="helpInfo">
            <div className="infoSub">
                <div className='entity'>
                <img src={email} className='helpImg'></img>
                <span className='bold'>Email</span>
                <br></br>
                bypass.carpool@j.mail
                <br></br>
                uber.pro@j.mail
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Help;
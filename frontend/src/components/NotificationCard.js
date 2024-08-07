import crossImg from '../Images/exclaim.png';
import checkImg from '../Images/VerifiedBadge.webp';
import carMes from '../Images/carMes2.png';

const NotificationCard = ({notification,children}) => {
    const status=notification.status;
    let img = carMes;
    if(status === "true"){
        img = checkImg;
    }
    else if(status === "false"){
        img = crossImg;
    }
    const classUse = (notification.status == "true") ? "blackBg":"";
    return(
        <>
        <div className={"notifyCard "+classUse }>
            <img src={img} className='cross1'></img>
            <div className='notifyContent'>
            {children}
            </div>
        </div>
        </>
    );
}

export default NotificationCard;
import sedan from '../Images/carBlack.webp';
import luxury from '../Images/luxury3.png';
import miniVan from '../Images/truck.webp';

const RideCard=({data})=>{
    console.log(data);
    let carType=sedan;
    if(data.carType === "Luxury"){
        carType = luxury;
    }
    if(data.carType === "Mini Van"){
        carType = miniVan;
    }
    return(
        <div className="infoCard">
        <div className="infoRide">
            <div className="carName">
                <div className='first1'>{data.carName}</div> 
                <div className='space'>{data.carNumber}</div>
                <div className="space1">{`${data.driverRating} stars`}</div>
            </div>
            <ol className="relative border-s border-white-200 dark:border-gray-700 mb-0 pb-0 borderBottom">
            <li className="mb-3 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-greenBold dark:bg-greenBold"></div>
                <time className="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500 carName1"><div className='first'>{data.startDate} </div><div className="space">{data.source}</div><div className="space1">{data.driverName}</div></time>
            </li>
            <li className="mb-3 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-red-900 dark:bg-red-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500 carName2"><div className='first'>{data.destinationDate}</div> <div className="space">{data.destination}</div><div className="space1">{data.driverContact}</div></time>
            </li>
            </ol>
        </div>
        <img className='carH' src={carType}></img>
        </div>
    );
}

export default RideCard;
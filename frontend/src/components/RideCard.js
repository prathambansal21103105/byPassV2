import car from '../Images/carBlack.webp';

const RideCard=()=>{
    return(
        <div className="infoCard">
            <div className="infoRide">
            <p className="carName">Swift Dzire DL 03UA 8989</p>
            <ol class="relative border-s border-white-200 dark:border-gray-700">                  
            <li class="mb-3 ms-4 ">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-greenBold dark:bg-greenBold"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">6:35am, Wed 3 Aug <span className="city">Gurugram</span><span className="city">Lewis Hamilton</span></time>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </li>
            <li class="mb-3 ms-4 ">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-red-900 dark:bg-red-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">8:35am, Wed 3 Aug <span className="city">Chandigarh</span><span className="city">5 stars</span></time>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </li>
            </ol>
            </div>
            <img className='carH' src={car}></img>
        </div>
    );
}

export default RideCard;
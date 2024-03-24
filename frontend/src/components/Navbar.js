import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Logo from '../Images/logo1.png';

const Navbar=()=>{
    const url="https://media.istockphoto.com/id/1408605259/vector/auto-sports-vehicle-silhouette.jpg?s=612x612&w=0&k=20&c=--lwIV-ayDVrjistgR22-B9xFic1xsAusMxxzu6Mjhw=";
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
            <img src={Logo} className={classes.img} alt="logo"></img>
            </div>
            <div className={classes.links}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/user/browse" className={({isActive})=> isActive ? classes.active:undefined} id="nav" end>Browse</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/profile" className={({isActive})=> isActive ? classes.active:undefined} id="nav" end>Profile</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
}
export default Navbar;
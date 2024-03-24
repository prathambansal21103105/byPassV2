import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar=()=>{
    const url="../Images/byPass.png";
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
            <img src={url} alt="logo"></img>
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
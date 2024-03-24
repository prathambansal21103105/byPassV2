import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const UserLayout=()=>{
    return (
        <>
            <Navbar/>
            User
            <Outlet/>
        </>
    );
}
export default UserLayout;
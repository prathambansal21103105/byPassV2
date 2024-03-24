import { Outlet } from "react-router-dom";
import Home from "./Home";

const HomeLayout=()=>{
    return (
        <>
            <Home/>
            <Outlet/>
        </>
    );
}
export default HomeLayout;
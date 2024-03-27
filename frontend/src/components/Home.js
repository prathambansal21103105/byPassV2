import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BgImage from "../Images/carpool.png";
import logo from "../Images/logo.png";
const Home = () => {
  return (
    <div className="flex flex-col items-center  py-24 px-16 gap-2">
      {/* <p className="text-[2.5rem] font-bold  text-gray-50">
        "Pooling Rides, Sharing Smiles"{" "}
        <span className="text-gray-50 text-[3rem] md:text-[4rem] "></span>
      </p> */}
      <img src={BgImage} className="rounded-3xl hover:blur-sm h-fit w-full" />
    </div>
  );
};
export default Home;

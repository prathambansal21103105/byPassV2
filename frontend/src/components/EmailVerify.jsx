import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import success from "../Images/success.jpg";
// import styles from "./styles.module.css";
// import { Fragment } from "react/cjs/react.production.min";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:3001/register/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    // <Fragment>
    <div>
      {validUrl ? (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12">
          <div className="w-full flex items-center justify-center rounded-full m-10">
            <img
              src={success}
              alt="success_img"
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
          <h1 className="text-yellow-200 text-4xl font-bold">
            Email verified successfully
          </h1>
          <NavLink to="/login">
            <button className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-yellow-400 px-12 py-2 text-white rounded-md hover:shadow-md duration-500 transition-all ease-in-out hover:bg-yellow-600 font-semibold mt-8">
              Login
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="flex  justify-center w-full h-full">
          <h3 className="text-yellow-50 text-4xl font-bold">
            {" "}
            404 not found :(
          </h3>
        </div>
      )}
    </div>
    // </Fragment>
  );
};

export default EmailVerify;

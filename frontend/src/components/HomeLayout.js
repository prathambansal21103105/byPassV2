import { Outlet, useNavigate } from "react-router-dom";
import Home from "./Home";
import checkFinalFinal from '../Images/checkFinal2.gif';
import Modal from "./Modal";

const HomeLayout = ({modal,text}) => {
  const navigate = useNavigate();
  if(modal){
  setTimeout(()=>{
    navigate("/");
  },3000)
}
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full h-screen">
      <Outlet />
      <Home />
      {modal && <div className="modal">
        <Modal open={modal}>
          <div className="message">
            <img src={checkFinalFinal} className="imgCheck"></img>
            {text}
          </div>
        </Modal>
      </div>}
    </section>
  );
};
export default HomeLayout;

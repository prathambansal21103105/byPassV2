// import Logo from '../Images/edit.jpeg';

const Profile=()=>{
    const url="https://cdn.racingnews365.com/Riders/Hamilton/_570x570_crop_center-center_none/f1_2024_lh_mer_lg.png?v=1708704226";
    return(
    <>
        <div className="root1">
            <div className="user">
                <div className="content">
                    <span className="nameHead">Lewis Hamilton</span>
                    <img src={url} alt={"photo"} className="img1" />
                    @lhamilton90
                    <div className="root2">
                    <div className="card">
                        2
                        <br></br>
                        <span class="bold">Ongoing</span>
                    </div>
                    <div className="card">
                        2
                        <br></br>
                        <span class="bold">Completed</span>
                    </div>
                    <div className="card">
                        ⭐️ 5
                        <br></br>
                        <span class="bold">Rating</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="outerContainer">
                <span className="title">Basic Info </span>
                <div className="content1">
                <div className="qs">
                    Email       
                    <br></br>
                    Phone Number 
                    <br></br>
                    City
                    <br></br>
                    Pin Code
                    <br></br>
                    Aadhar Card
                    <br></br>
                </div>
                <div className="form">
                    lhamilton@gmail.com
                    <br></br>
                    9998887779 
                    <br></br>
                    Chicago
                    <br></br>
                    998899
                    <br></br>
                    <span className="greenBold">Verified</span>
                    <br></br>
                </div>
                </div>
                <button className="edit"> Edit </button>
                </div>
                <div className="outerContainer">
                <span className="title">Past rides</span>
                <div className="content3">
                <div className="qs">
                   
                </div>
                <div className="form">

                </div>
                </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Profile;
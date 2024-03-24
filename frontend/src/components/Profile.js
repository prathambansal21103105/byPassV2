
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
                <div className="content1">
                </div>
            </div>
        </div>
    </>
    );
}
export default Profile;
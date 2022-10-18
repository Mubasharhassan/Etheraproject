import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PersonIcon from "@mui/icons-material/Person";
import StickyHeadTable from "./DateTime";

const HomePageData = () => {
  return (
    <>
      <div>
        <div class=" main-div-data">
          <h2>Your Appoinments</h2>
          <button className="outlined">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Request Appoinments</span>
          </button>
        </div>
        {/* <div className="sidebar-div"> */}
        <div class="main">
          <div className="two-d-div">
            <div className="previous-appoinment">
              <div className="previous-appoinment-date">
                <p className="previous-appoinment-peragraph">
                  Previous Appoinments
                </p>
                <div className="date-and-time">
                  <span className="appoinment-with-date">
                    07/22/2022 | 8.00 AM - 9.00 AM
                  </span>
                </div>
              </div>
              <div className="previous-appoinment-telehealt-with">
                <div>
                  <h6 className="telehealth-name">
                    <VideoChatIcon className="Add-icon-btn" />
                    <span>Telehealth</span>
                  </h6>
                  <p className="telehealth-meeting">Zoom Meeting</p>
                </div>
                <div>
                  <h6 className="telehealth-name">
                    <PersonIcon className="Add-icon-btn" />
                    With
                  </h6>
                  <p className="telehealth-meeting">Isaac Kim</p>
                </div>
              </div>
            </div>

            <div className="previous-appoinment">
              <div className="previous-appoinment-date">
                <p className="previous-appoinment-peragraph">
                  Previous Appoinments
                </p>
                <div className="date-and-time">
                  <span className="appoinment-with-date">
                    07/22/2022 | 8.00 AM - 9.00 AM
                  </span>
                </div>
              </div>
              <div className="previous-appoinment-telehealt-with">
                <div>
                  <h6 className="telehealth-name">
                    <VideoChatIcon className="Add-icon-btn" />
                    <span>Telehealth</span>
                  </h6>
                  <p className="telehealth-meeting">Zoom Meeting</p>
                </div>
                <div>
                  <h6 className="telehealth-name">
                    <PersonIcon className="Add-icon-btn" />
                    With
                  </h6>
                  <p className="telehealth-meeting">Isaac Kim</p>
                </div>
              </div>
              <div className="previous-appoinment-telehealt-with">
                <div>
                  <h6 className="telehealth-name">
                    <VideoChatIcon className="Add-icon-btn" />
                    <span>Telehealth</span>
                  </h6>
                  <p className="telehealth-meeting">Zoom Meeting</p>
                </div>
                <div>
                  <h6 className="telehealth-name">
                    <PersonIcon className="Add-icon-btn" />
                    With
                  </h6>
                  <p className="telehealth-meeting">Isaac Kim</p>
                </div>
              </div>
            </div>
          </div>

          <StickyHeadTable />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default HomePageData;

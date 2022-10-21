import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import StickyHeadTable from "./DateTime";
import TableData from "./TableData";

const HomePageData = () => {
  return (
    <>
      <div className="Appoinment-div ">
        <div class=" main-div-data">
          <h2>Your Appoinments</h2>
          <button className="outlined">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Request Appoinments</span>
          </button>
        </div>

        <div className="next-and-previous-appoinments-div">
          <div className="Appoinment-main-div1">
            <div className="Appoinment-div1">
              <div>
                <span>Previous Appoinments</span>
              </div>
              <div className="Date-with-time">
                <span className="date">07/22/2022 | 8:00 AM - 9:00 AM</span>
                {/* <span className="date">|</span> */}
                {/* <span className="time">8:00 AM - 9:00 AM</span> */}
              </div>
            </div>
            <div className="Appoinment-div2">
              <div className="telehealth-and-with">
                <div>
                  <span className="telehealth-with-icon">
                    <VideoChatIcon />
                    Telehealth
                  </span>
                  <div>
                    <span>Zoom Meeting</span>
                  </div>
                </div>
                <div>
                  <span className="telehealth-with-icon">
                    <PersonIcon />
                    With
                  </span>
                  <div>
                    <span>Isaac Kim</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Appoinment-main-div">
            <div className="Appoinment-div3">
              <div>
                <span>Next Appoinments</span>
              </div>
              <div className="Date-with-time">
                <span className="date">Today | 8:00 AM - 9:00 AM</span>
                {/* <span className="date">|</span> */}
                {/* <span className="time">8:00 AM - 9:00 AM</span> */}
              </div>
            </div>
            <div className="Appoinment-div22">
              <div className="Ethera-Irvine-with-icon">
                <div>
                  <span className="ethera-Irvine">
                    <LocationOnIcon />
                    Ethera Irvine
                  </span>
                  <div>
                    <span className="irvine-address">
                      19712 MacArthur Blvd. Suite 110, Irvine, CA 92612
                    </span>
                  </div>
                </div>
              </div>

              <div className="telehealth-and-with1">
                <div>
                  <span className="telehealth-with-icon">
                    <DoorSlidingIcon />
                    Room
                  </span>
                  <div>
                    <span>Zoom Meeting</span>
                  </div>
                </div>
                <div>
                  <span className="telehealth-with-icon">
                    <PersonIcon />
                    With
                  </span>
                  <div>
                    <span>Isaac Kim</span>
                  </div>
                </div>
                <div>
                  <button className="outlined1">Check-in</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main">
          {/* <StickyHeadTable /> */}
          <TableData />
        </div>
      </div>
    </>
  );
};

export default HomePageData;

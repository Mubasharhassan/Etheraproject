import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { HiOutlinePlusCircle } from "react-icons/hi";
import StickyHeadTable from "./DateTime";
import TableData from "./TableData";
import { Grid } from "@mui/material";

const HomePageData = () => {
  return (
    <>
      <div className="Appoinment-div ">
        <div class=" main-div-data">
          <h2 className="header-pera">Your Appoinments</h2>
          <button className="outlined11">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Request Appoinments</span>
          </button>
        </div>

        <div className="next-and-previous-appoinments-div">
        {/* <Grid> */}
          <div className="Appoinment-main-div1">
            <div className="Appoinment-div1">
              <div style={{ marginLeft: "3rem", paddingTop:".5rem" }}>
                <div>
                  <span className="previous-pera">Previous Appoinments</span>
                </div>
                <div className="Date-with-time">
                  <span className="date">07/22/2022 |</span>
                  {/* <span className="date">|</span> */}
                  <span className="time">8:00 AM - 9:00 AM</span>
                </div>
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
          {/* </Grid> */}

          <div className="Appoinment-main-div">
            <div className="Appoinment-div3">
              <div  style={{ marginLeft: "3rem", paddingTop:".5rem" }}>
                <div>
                  <span className="previous-pera">Next Appoinments</span>
                </div>
                <div className="Date-with-time">
                  <span className="date">Today |</span>
                  {/* <span className="date">|</span> */}
                  <span className="time">8:00 AM - 9:00 AM</span>
                </div>
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
      </div>
      <TableData />
      <div className="main-div-of-show-btn-footer">
        <div className="main-div-of-show-btn-footer-with-margin">
          <div className="show-with-btn">
            <div className="show-with-btn-in-footer">
              <div>
                <h4 className="span-past-due">Show :</h4>
              </div>
              <div>
                <button className="show-btn1-in-footer">
                  <span className="show-items-btn">Show items</span>
                </button>
              </div>
            </div>
          </div>
          <div className="show-with-btn1">
            <span className="show-items-btn">
              <ArrowLeftIcon />
            </span>
            <span className="show-items-btn">1</span>
            <span className="show-items-btn">2</span>
            <span className="show-items-btn">3</span>
            <span className="show-items-btn">....</span>
            <span className="show-items-btn">
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageData;

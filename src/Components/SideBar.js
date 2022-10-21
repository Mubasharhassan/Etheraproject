import React from "react";
import HomePageData from "./HomePageData";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PersonIcon from "@mui/icons-material/Person";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-div">
        <div className="navbar">
          <a className="icons-div">
            <DescriptionIcon className="Add-icon-btn" />
            <span>Appoinments </span>
          </a>
          <a className="icons-div">
            <FolderIcon className="Add-icon-btn" />
            <span>Documents </span>
          </a>
          <a className="icons-div">
            <ForumRoundedIcon className="Add-icon-btn" /> <span>Messages </span>
          </a>
          <a className="icons-div">
            <MonetizationOnIcon className="Add-icon-btn" />
            <span>Billing </span>
          </a>
          <a className="icons-div">
            <GppGoodOutlinedIcon className="Add-icon-btn" />
            <span>Insurance </span>
          </a>
          <a className="icons-div">
            <AccountCircleRoundedIcon className="Add-icon-btn" />
            <span>My Provider </span>
          </a>
          <a className="icons-div">
            <SettingsRoundedIcon className="Add-icon-btn" />{" "}
            <span>Settings </span>
          </a>
        </div>
      </div>
      {/* <HomePageData /> */}
    </>
  );
};

export default SideBar;

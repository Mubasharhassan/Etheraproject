import * as React from "react";
import { Link, NavLink, Outlet, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Header from "./Header";
import HomePageData from "./HomePageData";
import Insurance from "./Insurance";

const drawerWidth = 240;
const drawerList = [
  { name: "Appoinments", icons: <DescriptionIcon />, to: "/" },
  { name: "Documents", icons: <FolderIcon />, to: "/Documents" },
  { name: "Messages", icons: <ForumRoundedIcon />, to: "/Messages" },
  { name: "Billing", icons: <MonetizationOnIcon />, to: "/Billing" },
  { name: "Insurance", icons: <GppGoodOutlinedIcon />, to: "/Insurance" },
  { name: "My Provider", icons: <AccountCircleRoundedIcon />, to: "/Provider" },
  { name: "Settings", icons: <SettingsRoundedIcon />, to: "/Settings" },
];

export default function ClippedDrawer() {
  // let history = useHistory();
  // console.log(history);
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <div
          style={{
            width: "13%",
            borderRight: "1px solid lightgray",
            minHeight: "100vh",
            backgroundColor: "#fefbf4",
          }}
        >
          <Box sx={{ overflow: "auto" }}>
            <Divider />
            <List>
              {drawerList.map((text, index) => (
                <NavLink
                  key={index}
                  to={text.to}
                  className="active"

                  // className={(item, isActive) => console.log(history)}
                  // style={{
                  //   textDecoration: "none",
                  // }}
                  // style={({ isActive }) => ({
                  //   color: isActive ? "gray" : "black",
                  // })}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{
                        gap: "1rem",
                        marginTop: ".8rem",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        "& .css-zxdg2z": {
                          padding: "0px",
                        },
                      }}
                    >
                      {text.icons}

                      <ListItemText primary={text.name} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </Box>
        </div>

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
          {/* <HomePageData /> */}
          {/* <Insurance /> */}
        </Box>
      </Box>
    </Box>
  );
}

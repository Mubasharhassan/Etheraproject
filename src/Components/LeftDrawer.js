import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
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

const drawerWidth = 240;
const drawerList = [
  { name: "Appoinments", icons: <DescriptionIcon /> },
  { name: "Documents", icons: <FolderIcon /> },
  { name: "Messages", icons: <ForumRoundedIcon /> },
  { name: "Billing", icons: <MonetizationOnIcon /> },
  { name: "Insurance", icons: <GppGoodOutlinedIcon /> },
  { name: "My Provider", icons: <AccountCircleRoundedIcon /> },
  { name: "Settings", icons: <SettingsRoundedIcon /> },
];

export default function ClippedDrawer() {
  return (
    <Box>
      {/* <AppBar
        position="static"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 10,
          boxShadow: "none !important",
          padding: "0px",
        }}
      > */}
      <Header />
      {/* </AppBar> */}

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
                <ListItem key={index} disablePadding>
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
              ))}
            </List>
          </Box>
        </div>

        <Box component="main" sx={{ flexGrow: 1 }}>
          <HomePageData />
        </Box>
      </Box>
    </Box>
  );
}

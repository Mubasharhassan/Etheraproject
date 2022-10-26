import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import HomePageData from "./Components/HomePageData";
import Layout from "./Components/Layout";
import ClippedDrawer from "./Components/LeftDrawer";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Insurance from "./Components/Insurance";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClippedDrawer />}>
          <Route index element={<HomePageData />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import "./App.scss";
import "./index.scss";
import Header from "./Components/Header";
import HomePageData from "./Components/HomePageData";
import Layout from "./Components/Layout";
import ClippedDrawer from "./Components/LeftDrawer";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Insurance from "./Components/Insurance";
import Profile from "./Components/Profile";
import Billing from "./Components/Billing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClippedDrawer />}>
          <Route index element={<HomePageData />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="profile" element={<Profile />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

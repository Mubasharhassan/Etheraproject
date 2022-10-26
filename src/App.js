import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import HomePageData from "./Components/HomePageData";
import Layout from "./Components/Layout";
import ClippedDrawer from "./Components/LeftDrawer";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Insurance from "./Components/Insurance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClippedDrawer />}>
          <Route index element={<HomePageData />} />

          <Route path="insurance" element={<Insurance />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import DatailPage from "../pages/detailPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<DatailPage />} />
    </Routes>
  );
}

export default MainRouter;

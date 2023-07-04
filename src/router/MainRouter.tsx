import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import DatailPage from "../pages/detailPage";
import BoardPage from "../pages/boardPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<DatailPage />} />
      <Route path="/comunity" element={<BoardPage />} />
    </Routes>
  );
}

export default MainRouter;

import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import DatailPage from "../pages/detailPage";
import BoardPage from "../pages/boardPage";
import WritePage from "../pages/writePage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<DatailPage />} />
      <Route path="/comunity" element={<BoardPage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
}

export default MainRouter;

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import AllActivities from "../../pages/allActivities/AllActivities";
import AllHouse from "../../pages/allHouse/AllHouse";
import DetailPage from "../../pages/detailPage/DetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodation" element={<AllHouse />} />
      <Route path="/accommodation/:id" element={<DetailPage />} />
      <Route path="/activities" element={<AllActivities />} />
    </Routes>
  );
};

export default Router;

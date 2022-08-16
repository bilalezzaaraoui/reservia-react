import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import AllActivities from "../../pages/allActivities/AllActivities";
import AllHouse from "../../pages/allHouse/AllHouse";
import DetailPage from "../../pages/detailPage/DetailPage";
import Panier from "../../pages/panier/Panier";
import ActivityDetails from "../../pages/activityDetails/ActivityDetails";
import Erreur from "../../pages/error/Erreur";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodation" element={<AllHouse />} />
      <Route path="/accommodation/filter=:filter" element={<AllHouse />} />
      <Route path="/accommodation/:id" element={<DetailPage />} />
      <Route path="/activities" element={<AllActivities />} />
      <Route path="/activity/:id" element={<ActivityDetails />} />
      <Route path="/panier/:id" element={<Panier />} />
      <Route path="/*" element={<Erreur />} />
    </Routes>
  );
};

export default Router;

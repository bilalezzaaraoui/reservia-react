import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import AllActivities from "../../pages/allActivities/AllActivities";
import AllHouse from "../../pages/allHouse/AllHouse";
import DetailPage from "../../pages/detailPage/DetailPage";
import Panier from "../../pages/panier/Panier";
import ActivityDetails from "../../pages/activityDetails/ActivityDetails";
import Erreur from "../../pages/error/Erreur";
import { useSelector } from "react-redux";
import ReservationPage from "../../pages/reservation/ReservationPage";
import ModifyInfoPage from "../../pages/modifyInfo/ModifyInfoPage";
import OrderSuccesfull from "../../pages/orderSuccessful/OrderSuccessful";

const Router = () => {
  const isCartFull = useSelector((state) => state.cart.isCartFull);
  const isOrderSuccesful = useSelector((state) => state.cart.orderSuccesful);
  const isCertifiedConnected = useSelector(
    (state) => state.user.isCertifiedConnected
  );
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodation" element={<AllHouse />} />
      <Route path="/accommodation/filter=:filter" element={<AllHouse />} />
      <Route path="/accommodation/search=:search" element={<AllHouse />} />
      <Route path="/accommodation/:id" element={<DetailPage />} />
      <Route path="/activities" element={<AllActivities />} />
      <Route path="/activity/:id" element={<ActivityDetails />} />
      <Route path="/*" element={<Erreur />} />
      {/* Protected Routes */}
      <Route
        path="/panier"
        element={isCartFull ? <Panier /> : <Navigate replace to="/*" />}
      />
      <Route
        path="/mes-reservation"
        element={
          isCertifiedConnected ? (
            <ReservationPage />
          ) : (
            <Navigate replace to="/*" />
          )
        }
      />{" "}
      <Route
        path="/modifier-mes-infos-personnelles"
        element={
          isCertifiedConnected ? (
            <ModifyInfoPage />
          ) : (
            <Navigate replace to="/*" />
          )
        }
      />
      <Route
        path="/order-successful"
        element={
          isOrderSuccesful ? <OrderSuccesfull /> : <Navigate replace to="/*" />
        }
      />
    </Routes>
  );
};

export default Router;

import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

export const PrivateRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.app.loggedIn);
  let location = useLocation();
  const navigate = useNavigate();

  //Check if user is logged in
  if (!isLoggedIn) {
    navigate("/login");
  }

  return <Outlet {...props} />;
};

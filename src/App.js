import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoomList from "./pages/RoomList";
import { PrivateRoute } from "./components/PrivateRoute";
import { CustomAppBar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.app);
  // if (location.pathname === "/login" || location.pathname === "/register") {
  //   return null;
  // }

  return (
    <>
      <CustomAppBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/rooms" element={<RoomList />} />
        </Route>
        <Route path="/" element={loggedIn ? <Homepage /> : <WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;

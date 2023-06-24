import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Convert from "../components/Convert";
import Protected from "../components/Protected";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected
            isLoggedIn={window.localStorage.getItem("auth_token") !== null}
          >
            <Convert />
          </Protected>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

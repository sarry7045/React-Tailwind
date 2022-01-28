import React from "react";
import { useAuth } from "./RouteAuth";
import { Navigate, useLocation } from "react-router-dom";

function ReqAuth({ children }) {
  const location = useLocation();
  // const navigate = useNavigate()
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default ReqAuth;

import React, { useState } from "react";
import { useAuth } from "./RouteAuth";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const location = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();

  const redirect = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirect, { replace: true });
  };
  return (
    <>
      <div>
        <label>
          Username:
          <input type="text" onChange={(e) => setUser(e.target.value)}>
            {" "}
          </input>
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default Login;

import React from "react";
import { useAuth } from "./RouteAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <div>
        <h4>Profile Page</h4>
        <h2>Welcome {auth.user}</h2>
        <button onClick={handleLogout}>Logout </button>
      </div>
    </>
  );
}

export default Profile;

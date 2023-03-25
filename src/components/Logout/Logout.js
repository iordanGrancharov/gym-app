import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { logout } from "../../services/users";

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;

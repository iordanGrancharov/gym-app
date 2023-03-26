import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    try {
      logout();
    } catch (e) {
      return <Navigate to="/404" />;
    }
  }, [logout]);
  return <Navigate to="/login" />;
};

export default Logout;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRouteUsers = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={`/profile/${user._id}`} />;
  }
  return children;
};

export default ProtectedRouteUsers;

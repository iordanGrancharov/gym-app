import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

import UseAuth from "../../hooks/UseAuth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  const location = useLocation();
//   console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin border-[#d19945] "></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;

import { use } from "react";
import { AuthContext } from "./AuthContex";
import { Navigate, useLocation } from "react-router";

const PriveteRouter = ({ children }) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation()

    if(loading) {
        return <p>Loading....!</p>
    }

    if(user) {
        return children;
    }

  return <Navigate state={location?.pathname} to={'/auth/login'} /> ;
};

export default PriveteRouter;

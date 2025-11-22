import { Outlet } from "react-router";
import Navber from "../components/Navber";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
    return (
        <div className="bg-base-300 h-screen">
            <header className="w-11/12 mx-auto pt-5">
                <Navber />
            </header>
            <main>
                <Outlet />
            </main>
            <ToastContainer />
        </div>
    );
};

export default AuthLayout;
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ShocaleLogin = () => {
    return (
        <div>
            <h3 className='text-xl font-bold'>Login With</h3>
            <div className="grid grid-cols-1 mt-5">
                <button className="btn btn-outline btn-primary"><FcGoogle size={24} /> Login With Goggle</button>
                <button className="btn btn-outline mt-2 hover:bg-[#706F6F]"><FaGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default ShocaleLogin;
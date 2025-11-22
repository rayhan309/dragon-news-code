import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { LiaFacebookF } from "react-icons/lia";

const FindUs = () => {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold myText">Find Us On</h3>
      <div className="join join-vertical w-full mt-3">
        <button className="btn join-item py-5 justify-start"><LiaFacebookF size={18} /> Facebook</button>
        <button className="btn join-item py-5 justify-start"><IoLogoTwitter size={18} /> Twitter</button>
        <button className="btn join-item py-5 justify-start"><FaInstagram size={18} />  Instregram</button>
      </div>
    </div>
  );
};

export default FindUs;

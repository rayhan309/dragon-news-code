import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

const goggleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ShocaleLogin = () => {
  // login with gogle
  const goggleLoginHandle = () => {
    signInWithPopup(auth, goggleProvider)
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Your Sigin Complite!",
          icon: "success",
        });
        console.log(res.user);
      })
      .catch((error) => console.log(error?.message));
  };

  const siginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Your Sigin Complite!",
          icon: "success",
        });
        console.log(res.user);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      });
  };

  return (
    <div>
      <h3 className="text-xl font-bold">Login With</h3>
      <div className="grid grid-cols-1 mt-5">
        <button
          onClick={goggleLoginHandle}
          className="btn btn-outline btn-primary"
        >
          <FcGoogle size={24} /> Login With Goggle
        </button>
        <button
        onClick={siginWithGithub} 
        className="btn btn-outline mt-2 hover:bg-[#706F6F]">
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default ShocaleLogin;

import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContex";
import { toast } from "react-toastify";
import {  } from "react-router";

const Register = () => {

  const {createUser, userProfieUpddate} = use(AuthContext)
  const navigate = useNavigate()

  // register handle
  const registerHandle = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // register
    createUser(email, password)
    .then(res => {
      const user = res?.user;
      console.log(user)
      toast.success("Register Successfull!")
      navigate('/')
      userProfieUpddate({ displayName: name, photoURL:photo })
    })
    .catch(error => {
      alert(error.message)
    });
  };

  return (
    <div className="max-h-screen flex justify-center items-center mt-40 mx-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-2xl font-semibold text-center pb-3">
            Register account
          </h3>
          <form onSubmit={registerHandle}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />

              {/* photo */}
              <label className="label">Photo Url</label>
              <input type="text" name="photo" className="input" placeholder="Photo Url" />

              {/* email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />

              {/* btn */}
              <button className="btn btn-neutral mt-4 bg-[#403F3F]">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            Alrady Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-[#D72050]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

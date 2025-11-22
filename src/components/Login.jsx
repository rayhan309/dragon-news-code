import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../Provider/AuthContex";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = use(AuthContext);

  // login handle
  const loginHandle = (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password)

    // login whith email
    loginUser(email, password)
    .then(result => {
      const user = result?.user;
      console.log(user)
      toast.success("Login Successfully")
    })
    .catch(error=> {
      toast.error(error?.message)
    })
  }

  return (
    <div className="max-h-screen flex justify-center items-center mt-40 mx-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-2xl font-semibold text-center pb-3">
            Login your account
          </h3>
          <form onSubmit={loginHandle}>
            <fieldset className="fieldset">

              {/* email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 bg-[#403F3F]">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-[#D72050]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

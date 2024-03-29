import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { fetchToken } from "../redux/reducer/loginSlice";
import { login } from "../redux/reducer/authUserSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // navigasi

  const dispatch = useDispatch(); //redux for store data

  const submitHandler = (e) => {
    e.preventDefault(), dispatch(login({ email, password }));
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="w-2/3 m-auto h-[calc(100vh-96px)] flex flex-col  ">
        <div className="flex flex-col m-auto  ">
          <h1 className=" text-center">✏️ LOGIN</h1>
          <form className="flex  flex-col  items-center h-52 justify-evenly " onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Type Email here"
              className="input input-bordered w-full max-w-xs"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-80 h-9 bg-black rounded-lg flex justify-center items-center">Login</button>
          </form>

          <p className="items-end text-center">
            Belum punya akun?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

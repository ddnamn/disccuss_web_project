import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterData } from "../redux/reducer/registerSlice";
import { register } from "../redux/reducer/authUserSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const isRegistered = useSelector(store=>store.register.status)

  // const registerInfo=  useSelector(store=>store.register)
  const dispatch = useDispatch();

  const registerButtonHandler = (e) => {
    e.preventDefault(), dispatch(register({ name, email, password }));
    navigate("/login");
  };

  return (
    <>
      <div className="w-2/3 m-auto h-[calc(100vh-96px)]  flex flex-col justify-center">
        <div className="text-center">📝 REGISTER</div>
        <form
          className="flex  flex-col  items-center h-52 justify-evenly "
          onSubmit={registerButtonHandler}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs bg-based"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Type Email here"
            className="input input-bordered w-full max-w-xs bg-based"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs  bg-based"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {name && password.length >= 6 ? (
            <button className="w-80 h-9 bg-black rounded-lg ">register</button>
          ) : password.length === 0 ? (
            <p className="text-red-500">please fil the field</p>
          ) : (
            <p className="text-red-500">Password must be at least 6 characters</p>
          )}
        </form>
      </div>
    </>
  );
}

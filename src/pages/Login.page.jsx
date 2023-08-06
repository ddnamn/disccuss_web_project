import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    const data = {
      email: email,
      password: password,
    };
    e.preventDefault();
    dispatch(fetchToken(data));
    navigate('/',{replace:true});
  };

  return (
    <>
      <div className="w-2/3 m-auto h-[calc(100vh-96px)] flex flex-col  ">
        <div className="flex flex-col m-auto  ">
          <h1 className=" text-center">✏️ LOGIN</h1>
          <form className="flex  flex-col  items-center h-52 justify-evenly ">
            <input
              type="email"
              placeholder="Type Email here"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <button className="w-80 h-9 bg-black rounded-lg ">Login</button>
            <p className="items-end">
              Belum punya akun?{' '}
              <Link to="/register" className="text-blue-500 underline">
                Daftar di sini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

//does not allow to access via specific url

// you can rename this file be something else *RequireAuth

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function authChecker({ children }) {
  const token = useSelector((store) => store.login.token);
  const navigate = useNavigate();

  if (!token) {
    return navigate("/", { replace: true });
  }

  return children;
}

import { useSelector } from "react-redux";

export default function AuthChacker({ children }) {
  const check = useSelector((store) => store.register);
  return <>{children}</>;
}

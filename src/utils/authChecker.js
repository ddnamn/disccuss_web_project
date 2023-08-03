import { createContext, useState, useEffect } from "react";

const checkAuth = createContext();

export default function Auth() {
  const [authentication, setAuthentication] = useState();

  useEffect(() => {});

  const login = () => {};

  const logOut = () => {};

  return <></>;
}

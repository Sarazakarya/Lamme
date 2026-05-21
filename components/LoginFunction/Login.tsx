import { signIn } from "next-auth/react";
import { LoginT } from "../../lib/types/Auth";

const Login = async (data: LoginT) => {
  const res = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });
  return res
};
export default Login;
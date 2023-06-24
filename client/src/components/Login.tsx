import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../api/ApiConfig";

function Login() {
  useEffect(() => {
    if (window.localStorage.getItem("auth_token")) {
      window.location.href = "/";
    }
  }, []);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    Api.post("auth/login/", {
      email,
      password
    }).then((res) => {
      window.localStorage.setItem(
        "auth_token",
        res.data.data.auth_token.access
      );
      window.localStorage.setItem("user", res.data.data.user.first_name);
      window.location.href = "/";
    });
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-orange-700 uppercase">
          Sign in to Alemeno
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setEmail(element.value);
              }}
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setPassword(element.value);
              }}
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-orange-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

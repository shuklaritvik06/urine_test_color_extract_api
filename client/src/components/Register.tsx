import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../api/ApiConfig";

function Register() {
  useEffect(() => {
    if (window.localStorage.getItem("auth_token")) {
      window.location.href = "/";
    }
  }, []);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [first, setFirstName] = useState<string>();
  const [last, setLastName] = useState<string>();
  const [username, setUsername] = useState<string>();
  function handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    Api.post("auth/signup/", {
      email,
      password,
      username,
      first_name: first,
      last_name: last
    }).then((res) => {
      window.location.href = "/login";
    });
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-orange-700 uppercase">
          Sign up to Alemeno
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
          <div className="mb-2">
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold text-gray-800"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setFirstName(element.value);
              }}
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="last_name"
              className="block text-sm font-semibold text-gray-800"
            >
              Last Name
            </label>
            <input
              type="text"
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setLastName(element.value);
              }}
              id="last_name"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setUsername(element.value);
              }}
              id="last_name"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
              onClick={(e) => handleRegister(e)}
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-orange-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

import { useState } from "react";
import Api from "../api/ApiConfig";
import { JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

function Convert() {
  const [data, setData] = useState<any>({});
  const [file, setFile] = useState<FileList | null>(null);
  const handleFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (file) {
      const bin = file[0];
      const formData = new FormData();
      formData.append("file", bin);
      Api.post("file/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + window.localStorage.getItem("auth_token")
        }
      }).then((res) => {
        setData(res.data.result);
      });
    }
  };
  return (
    <>
      <header>
        <nav className="my-5">
          <div className="flex justify-between items-center max-w-7xl mx-auto h-16 bg-white text-black relative shadow-sm font-mono">
            <div className="flex items-center justify-center space-x-2">
              <a href="/" className="flex items-center justify-center">
                <span className="font-bold text-gray-600">Color Extract</span>
              </a>
            </div>
            <div>
              <button
                className="p-5 bg-orange-500 text-white rounded-md"
                onClick={() => {
                  window.localStorage.removeItem("auth_token");
                  window.localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex flex-col justify-center items-center h-screen w-screen max-w-4xl mx-auto">
        <h1 className="my-5 text-2xl text-center md:text-5xl font-bold text-[#333]">
          Extract Colors from File
        </h1>
        <div className="w-full">
          <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600" id="response">
                Pick your file
              </span>
            </span>
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                e.preventDefault();
                const element: HTMLInputElement = e.target;
                setFile(element.files);
                document.getElementById(
                  "response"
                )!.innerHTML = `File Selected: ${element.files![0].name}`;
              }}
            />
          </label>
          <div className="flex my-5 justify-center">
            <button
              className="text-white px-7 py-5 bg-orange-500 rounded-md"
              onClick={(e) => handleFile(e)}
            >
              Extract
            </button>
          </div>
        </div>

        <div className="bg-white border-2 border-dashed max-w-5xl w-full h-72 overflow-y-scroll">
          <JsonView
            data={data}
            shouldInitiallyExpand={(level) => true}
            style={defaultStyles}
          />
        </div>
      </div>
    </>
  );
}

export default Convert;

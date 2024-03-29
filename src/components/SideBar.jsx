import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="  w-16 mx-5 py-10 fixed overflow-x-hidden h-screen ">
      <div className="m-auto  w-2/3 h-full">
        <img src="logo1.png" alt="" />

        <div className="mt-20 bg-[#1A1E1F] rounded-3xl p-3 ">
          <Link to='/'><img src="Home.png" alt="" className="mb-5"  /></Link>
         <Link to='/playlist'><img src="playlist-1.png" alt="" className="mb-5" /></Link>
          <img src="radio.png" alt="" className="mb-5" />
          <img src="videos.png" alt="" className="mb-5" />
        </div>

        <div className="mt-10 bg-[#1A1E1F] rounded-3xl p-3 ">
          <img src="home.png" alt="" />

          <img src="profile.png" alt="" className="mb-5" />
          <img src="radio.png" alt="" className="mb-5" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.53498 0.833333C11.8107 0.833333 13.6666 2.6575 13.6666 4.90333V9.29417H8.07072C7.66967 9.29417 7.35257 9.60583 7.35257 10C7.35257 10.385 7.66967 10.7058 8.07072 10.7058H13.6666V15.0875C13.6666 17.3333 11.8107 19.1667 9.51633 19.1667H4.9743C2.6893 19.1667 0.833313 17.3425 0.833313 15.0967V4.9125C0.833313 2.6575 2.69862 0.833333 4.98363 0.833333H9.53498ZM15.9952 6.83768C16.2702 6.55352 16.7193 6.55352 16.9943 6.82852L19.671 9.49602C19.8085 9.63352 19.8818 9.80768 19.8818 10.0002C19.8818 10.1835 19.8085 10.3668 19.671 10.4952L16.9943 13.1627C16.8568 13.3002 16.6735 13.3735 16.4993 13.3735C16.316 13.3735 16.1327 13.3002 15.9952 13.1627C15.7202 12.8877 15.7202 12.4385 15.9952 12.1635L17.4618 10.706H13.6668V9.29435H17.4618L15.9952 7.83685C15.7202 7.56185 15.7202 7.11268 15.9952 6.83768Z"
              fill="#EFEEE0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

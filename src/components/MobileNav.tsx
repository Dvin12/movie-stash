import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <>
      <NavLink>
        <button>
          <img src="./public/images/logo.png" alt="" className="w-[130px]" />
        </button>
      </NavLink>

      <button className=" text-4xl text-Bone" onClick={handleClick}>
        <HiMenuAlt3 />
      </button>

      <aside
        className={` fixed right-0 top-0 h-screen  w-1/2  ${
          isActive ? "-translate-x-0" : " translate-x-full"
        } bg-slate-600/5 p-6 backdrop-blur-md duration-200`}
      >
        <button
          className="absolute right-6  text-4xl text-Bone"
          onClick={handleClick}
        >
          <IoClose />
        </button>
        <button className="mt-16 w-full rounded bg-BurntSienna py-2 font-medium  text-RaisinBlack">
          Sign Up
        </button>
        <ul className="my-6 flex flex-col gap-2 text-right text-lg text-Bone">
          <NavLink to={"/movies"}>
            <li>Movies</li>
          </NavLink>
          <NavLink to={"/tvshows"}>
            <li>TV Shows</li>
          </NavLink>
          <NavLink to={"/lists"}>
            <li>Lists</li>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}

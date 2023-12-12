import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <>
      <img src="./public/images/logo.png" alt="" className="w-[130px]" />
      <button className=" text-Bone text-4xl" onClick={handleClick}>
        <HiMenuAlt3 />
      </button>

      <aside
        className={` fixed right-0 top-0 h-screen  w-1/2  ${
          isActive ? "-translate-x-0" : " translate-x-full"
        } bg-slate-600/5 p-6 backdrop-blur-md duration-200`}
      >
        <button
          className="text-Bone absolute  right-6 text-4xl"
          onClick={handleClick}
        >
          <IoClose />
        </button>
        <button className="bg-BurntSienna text-RaisinBlack mt-16 w-full rounded py-2  font-medium">
          Sign Up
        </button>
        <ul className="text-Bone my-6 flex flex-col gap-2 text-right text-lg">
          <li>Movies</li>
          <li>Lists</li>
        </ul>
      </aside>
    </>
  );
}

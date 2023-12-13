import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-20 flex w-full items-center justify-between bg-[#0F0E0F] bg-opacity-25 p-3">
      <div className="flex gap-2 text-2xl text-Bone">
        <FaXTwitter />
        <FaInstagram />
      </div>
      <img src="./public/images/logo.png" alt="" className="w-[80px]" />
    </footer>
  );
}

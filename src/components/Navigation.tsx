import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className=" relative z-30 flex w-full items-center justify-between bg-[#0F0E0F] bg-opacity-25 p-6">
      <MobileNav />
      <DesktopNav />
    </nav>
  );
}

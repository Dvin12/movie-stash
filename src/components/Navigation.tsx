import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className=" flex w-full items-center justify-between bg-[#0F0E0F] bg-opacity-20 p-6">
      <MobileNav />
      <DesktopNav />
    </nav>
  );
}

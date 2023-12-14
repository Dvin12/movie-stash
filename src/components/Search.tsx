import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Search() {
  return (
    <section className="relative flex w-full items-center justify-center">
      <input
        type="text"
        placeholder="Search for a movie"
        className="w-[90%] rounded border-[1px] border-Bone/20 bg-Bone/10 p-3 text-Bone backdrop-blur-lg"
      />
      <div className="absolute right-8 text-2xl text-Bone">
        <HiMagnifyingGlass />
      </div>
    </section>
  );
}

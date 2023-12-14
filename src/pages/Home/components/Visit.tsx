import { Link } from "react-router-dom";

export default function Visit({ visit }) {
  return (
    <section className="mb-24 flex flex-col items-center justify-center gap-6 px-14 text-center font-medium text-Bone">
      <p className=" ">
        Want to find more {visit === "movies" ? "movies" : "TV shows"} to watch?
      </p>
      <Link
        to={`${visit === "movies" ? "/movies" : "/tvshows"}`}
        className="w-full"
      >
        <button className=" w-1/2 rounded bg-BurntSienna py-2 shadow-lg">
          Click here
        </button>
      </Link>
    </section>
  );
}

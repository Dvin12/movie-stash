import Filtering from "../../components/Filtering";
import MovieCard from "../../components/MovieCard";
import Search from "../../components/Search";

// Mockup

const popularMovies = [
  {
    title: "Blade Runner 2049",
    rating: 8,
    poster: "./public/images/posters/BladeRunner2049.jpg",
  },

  {
    title: "Arrival",
    rating: 8,
    poster: "./public/images/posters/arrival.jpg",
  },

  {
    title: "Dune Part 1",
    rating: 8,
    poster: "./public/images/posters/Dune.jpg",
  },

  {
    title: "Collateral",
    rating: 8,
    poster: "./public/images/posters/Collateral.jpg",
  },

  {
    title: "Blade Runner 2049",
    rating: 8,
    poster: "./public/images/posters/BladeRunner2049.jpg",
  },

  {
    title: "Arrival",
    rating: 8,
    poster: "./public/images/posters/arrival.jpg",
  },

  {
    title: "Dune Part 1",
    rating: 8,
    poster: "./public/images/posters/Dune.jpg",
  },

  {
    title: "Collateral",
    rating: 8,
    poster: "./public/images/posters/Collateral.jpg",
  },
];

export default function Movies() {
  return (
    <section className="relative z-20  py-8">
      <h1 className=" text-center text-4xl font-medium text-Bone">MOVIES</h1>
      <div className="my-4 flex flex-col items-center justify-center gap-5 px-6">
        <Filtering />
        <Search />
      </div>
      <div className="grid grid-cols-2 gap-3 px-3">
        {popularMovies.map((card, i) => (
          <MovieCard card={card} key={i} />
        ))}
      </div>
    </section>
  );
}

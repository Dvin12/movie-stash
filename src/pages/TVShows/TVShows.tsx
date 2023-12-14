import Filtering from "../../components/Filtering";
import MovieCard from "../../components/MovieCard";
import Search from "../../components/Search";

const popularShows = [
  {
    title: "Breaking Bad",
    rating: 8,
    poster: "./public/images/posters/BreakingBad.jpg",
  },

  {
    title: "Better Call Saul",
    rating: 8,
    poster: "./public/images/posters/BetterCallSaul.jpg",
  },

  {
    title: "Dark",
    rating: 8,
    poster: "./public/images/posters/Dark.jpg",
  },

  {
    title: "Mr Robot",
    rating: 8,
    poster: "./public/images/posters/MrRobot.jpg",
  },

  {
    title: "Breaking Bad",
    rating: 8,
    poster: "./public/images/posters/BreakingBad.jpg",
  },

  {
    title: "Better Call Saul",
    rating: 8,
    poster: "./public/images/posters/BetterCallSaul.jpg",
  },

  {
    title: "Dark",
    rating: 8,
    poster: "./public/images/posters/Dark.jpg",
  },

  {
    title: "Mr Robot",
    rating: 8,
    poster: "./public/images/posters/MrRobot.jpg",
  },
];

export default function TVShows() {
  return (
    <section className="relative z-20  py-8">
      <h1 className=" text-center text-4xl font-medium text-Bone">TV SHOWS</h1>
      <div className="my-4 flex flex-col items-center justify-center gap-5 px-6">
        <Filtering />
        <Search />
      </div>
      <div className="grid grid-cols-2 gap-3 px-3">
        {popularShows.map((card, i) => (
          <MovieCard card={card} key={i} />
        ))}
      </div>
    </section>
  );
}

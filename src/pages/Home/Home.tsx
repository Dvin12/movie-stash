import Header from "./components/Header";
import PopularSection from "./components/PopularSection";
import Visit from "./components/Visit";

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
];

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
];

// //////////////////////////////

export default function Home() {
  return (
    <section className="relative z-20 ">
      <Header />
      <PopularSection type="movies" popular={popularMovies} />
      <PopularSection type="TV shows" popular={popularShows} />
      <Visit />
    </section>
  );
}

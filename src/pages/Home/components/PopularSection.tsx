import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

import MovieCard from "../../../components/MovieCard";
import Visit from "./Visit";

export default function PopularSection({ type, popular, visit }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-[2px] px-6">
        <span className="h-4 w-[5px] bg-BurntSienna" />
        <h2 className="text-lg font-semibold text-Bone">
          Popular {type} this week
        </h2>
      </div>
      <Splide
        options={{
          pagination: false,
          fixedWidth: "15rem",
          gap: "2rem",
          padding: "4px",
        }}
      >
        {popular.map((card, i) => (
          <SplideSlide key={i}>
            <MovieCard card={card} />
          </SplideSlide>
        ))}
      </Splide>
      <Visit visit={visit} />
    </section>
  );
}

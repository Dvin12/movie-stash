import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

import MovieCard from "../../../components/MovieCard";

export default function PopularSection({ type, popular }) {
  return (
    <section className="my-10">
      <div className="flex items-center gap-[2px] px-6">
        <span className="h-4 w-[5px] bg-BurntSienna" />
        <h2 className="text-lg font-semibold text-Bone">
          Popular {type} this week
        </h2>
      </div>
      <Splide
        options={{
          pagination: false,
          fixedWidth: "14rem",
          gap: "1rem",
          padding: "4px",
        }}
      >
        {popular.map((card, i) => (
          <SplideSlide key={i}>
            <MovieCard card={card} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

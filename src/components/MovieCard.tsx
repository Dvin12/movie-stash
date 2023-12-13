import { FaRegStar } from "react-icons/fa";

export default function MovieCard({ card }) {
  return (
    <section className=" my-4  h-[360px] rounded-xl border-[1px] border-Bone/10 bg-Bone/5 p-4 backdrop-blur-sm">
      <img
        src={card.poster}
        alt=""
        className="h-[260px] w-full rounded-xl object-cover"
      />
      <div className="my-2 flex items-start justify-between gap-4">
        <h3 className=" text-Bone">{card.title}</h3>
        <span className=" flex items-center justify-center text-Bone">
          <FaRegStar />
          <div>{card.rating}/10</div>
        </span>
      </div>
    </section>
  );
}

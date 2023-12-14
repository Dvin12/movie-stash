import Genre from "./Genre";
import Rating from "./Rating";
import Year from "./Year";

export default function Filtering() {
  return (
    <section className=" flex w-full items-center justify-center gap-4 rounded border-[1px] border-Bone/10 bg-Bone/5 px-4 py-3">
      <Genre />
      <Year />
      <Rating />
    </section>
  );
}

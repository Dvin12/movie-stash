import ImageCard from "./ImageCard";

export default function Header() {
  const image1 = "./public/images/image1.jpg";
  const image2 = "./public/images/image2.jpg";
  const image3 = "./public/images/image3.jpg";

  return (
    <header className="grid grid-cols-1 items-center justify-center px-6 py-8">
      <section className="relative">
        <div className="flex items-center justify-center gap-3">
          <ImageCard image={image1} />
          <ImageCard image={image2} />
        </div>
        <div className="absolute left-1/4 top-10 z-20 w-full">
          <ImageCard image={image3} />
        </div>
      </section>
      <section className="z-20 mt-12 flex flex-col items-center justify-center gap-6 text-Bone">
        <div className="flex flex-col items-center justify-center pt-4 text-4xl font-bold leading-[36px] tracking-tight ">
          <span>COLLECT</span>
          <span>ORGANIZE</span>
          <span>RATE</span>
        </div>
        <p className="text-center font-medium">
          Streamline your movie experience with our ultimate movie stash app!
          Effortlessly gather, organize, and rate your favourite films and TV
          shows with ease
        </p>
        <button className=" w-[60%] rounded-sm bg-BurntSienna py-2 font-semibold text-Bone shadow-lg">
          Sign Up
        </button>
      </section>
    </header>
  );
}

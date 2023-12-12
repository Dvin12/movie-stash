export default function Background() {
  return (
    <div className=" relative  h-full w-full">
      <img
        src="./public/images/Vector1.png"
        alt=""
        className="absolute -right-10 -top-20 w-[300px]  opacity-60 blur-3xl"
      />

      <img
        src="./public/images/Vector2.png"
        alt=""
        className="absolute -left-20 -top-40  w-[300px] blur-3xl "
      />

      <img
        src="./public/images/Vector3.png"
        alt=""
        className="absolute bottom-0 right-10 w-[300px]  opacity-30 blur-3xl"
      />

      <img
        src="./public/images/Vector4.png"
        alt=""
        className="absolute -left-20 bottom-20 w-[300px] opacity-30  blur-3xl  "
      />
    </div>
  );
}

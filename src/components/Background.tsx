export default function Background() {
  return (
    <div className=" flex h-full w-full   ">
      <img
        src="./public/images/Vector1.png"
        alt=""
        className="  absolute -right-20 top-0 w-[300px] opacity-60 blur-3xl  "
      />

      <img
        src="./public/images/Vector2.png"
        alt=""
        className="  absolute left-0 top-40 w-[300px] opacity-60 blur-3xl"
      />

      <img
        src="./public/images/Vector3.png"
        alt=""
        className=" absolute bottom-0 left-0 w-[300px] opacity-90 blur-3xl"
      />

      <img
        src="./public/images/Vector4.png"
        alt=""
        className=" absolute -bottom-20 -right-20 w-[500px] opacity-40 blur-3xl  "
      />
    </div>
  );
}

export default function ImageCard({ image }) {
  return (
    <div className="h-[280px] w-1/2 rounded-xl  border-[1px] border-Bone/10 bg-Bone/5 p-3 backdrop-blur-sm ">
      <img
        src={image}
        alt=""
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  );
}

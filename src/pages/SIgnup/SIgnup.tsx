export default function Signup() {
  return (
    <section className="relative z-20 flex h-screen flex-col items-center justify-center px-6 py-8">
      <h2 className="text-center text-2xl font-medium text-Bone ">Sign Up</h2>
      <form className=" my-6 flex w-full flex-col items-center justify-center gap-5 rounded-md border-[1px] border-Bone/20 bg-Bone/10 px-6 py-12 backdrop-blur-lg">
        <div className="flex flex-col">
          <label className="text-sm text-Bone">Email Address</label>
          <input type="text" className="rounded bg-Bone px-3 py-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-Bone">Password</label>
          <input type="password" className="rounded bg-Bone px-3 py-2" />
        </div>
        <button className=" w-1/2 rounded bg-BurntSienna py-2 font-medium text-Bone">
          Login
        </button>
      </form>
    </section>
  );
}

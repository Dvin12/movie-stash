import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className=" relative h-full overflow-hidden bg-gradient-to-b from-[rgba(45,35,46,40)] to-[rgba(83,75,82,30)] font-Inter">
      {children}
    </main>
  );
}

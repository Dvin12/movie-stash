import Header from "./components/Header";
import PopularSection from "./components/PopularSection";

export default function Home() {
  return (
    <section className="relative z-20 px-6">
      <Header />
      <PopularSection />
    </section>
  );
}

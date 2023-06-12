import Blogs from "./components/Blogs";
import Cta from "./components/Cta";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import RecommendationsSection from "./components/Recommendations";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <Projects />
      {/* <Blogs /> */}
      <RecommendationsSection />
      <Cta />
    </main>
  );
}

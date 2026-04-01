import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CharactersSection from "@/components/CharactersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="noise-overlay min-h-screen bg-background overflow-x-hidden">
      <section id="главная"><HeroSection /></section>
      <section id="история"><StorySection /></section>
      <section id="персонажи"><CharactersSection /></section>
      <Footer />
    </div>
  );
};

export default Index;
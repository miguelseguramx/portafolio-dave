import ClientsSection from "@/components/ClientsSection";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <ClientsSection />
      <Videos />
      <Contact />
    </>
  );
}

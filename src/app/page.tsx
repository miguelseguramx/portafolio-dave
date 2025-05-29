import ClientsSection from "@/components/ClientsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <>
      <div className="px-4 py-8">
        <FeaturedProjects />
        <ClientsSection />
        <Videos />
        
        {/* <Contact /> */}
      </div>
    </>
  );
}

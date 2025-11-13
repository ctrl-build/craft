import SpaceHero from "@/components/SpaceHero";
import SpacePortal from "@/components/SpacePortal";
import SpaceExhibitInterior from "@/components/SpaceExhibitInterior";
import SpaceExhibitRooftop from "@/components/SpaceExhibitRooftop";
import SpaceCTA from "@/components/SpaceCTA";

export default function SpatiulPage() {
  return (
    <main>
      <SpaceHero />
      <SpacePortal />
      <SpaceExhibitInterior />
      <SpaceExhibitRooftop />
      <SpaceCTA />
    </main>
  );
}


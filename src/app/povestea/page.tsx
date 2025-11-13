import StoryHero from "@/components/StoryHero";
import ChapterEpicentrul from "@/components/ChapterEpicentrul";
import ChapterFuziunea from "@/components/ChapterFuziunea";
import ChapterSpatiulPrimitor from "@/components/ChapterSpatiulPrimitor";
import StoryCTA from "@/components/StoryCTA";

export default function PovesteaPage() {
  return (
    <main>
      <StoryHero />
      <ChapterEpicentrul />
      <ChapterFuziunea />
      <ChapterSpatiulPrimitor />
      <StoryCTA />
    </main>
  );
}


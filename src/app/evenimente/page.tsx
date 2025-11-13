import EventsHero from "@/components/EventsHero";
import EventsPortal from "@/components/EventsPortal";
import EventsExhibitCraft from "@/components/EventsExhibitCraft";
import EventsExhibitChicago from "@/components/EventsExhibitChicago";
import EventsForm from "@/components/EventsForm";

export default function EvenimentePage() {
  return (
    <main>
      <EventsHero />
      <EventsPortal />
      <EventsExhibitCraft />
      <EventsExhibitChicago />
      <EventsForm />
    </main>
  );
}


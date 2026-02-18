import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import TeleAssistance from '../components/sections/TeleAssistance';
import Advantages from '../components/sections/Advantages';
import Zones from '../components/sections/Zones';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Services />
      <TeleAssistance />
      <Advantages />
      <Zones />
      <Testimonials />
      <CTA />
    </main>
  );
}

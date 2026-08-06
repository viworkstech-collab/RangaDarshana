import Hero from "../../components/sections/hero";
import OurPractice from "../../components/sections/Practice";
import SelectedWorks from "../../components/sections/SelectedWorks";
import Timeline from "../../components/sections/Timeline";
import Testimonials from "../../components/sections/Testimonials"

function Home() {
  return (
    <>
      <Hero />
      <OurPractice />
      <SelectedWorks />
      <Timeline />
      <Testimonials />
    </>
  );
}

export default Home;
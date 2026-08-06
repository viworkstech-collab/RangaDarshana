import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Founders from "../pages/Founders/Founders";
import Plays from "../pages/Plays/Plays";
import Gallery from "../pages/Gallery/Gallery";
import Videos from "../pages/Videos/Videos";
import Achievements from "../pages/Achievements/Achievements";
import Events from "../pages/Events/Events";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="founders" element={<Founders />} />
        <Route path="plays" element={<Plays />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="videos" element={<Videos />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
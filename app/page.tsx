import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedTutorials from "./components/FeaturedTutorials";
import TelegramButton from "./components/TelegramButton";
import Tutors from "./components/Tutors";
import BackToTopButton from "./components/BackToTopButton";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <FeaturedTutorials />
      <AboutUs />
      <Tutors />
      <Testimonials />
      <Pricing />
      <TelegramButton />
      <BackToTopButton />
    </div>
  );
}

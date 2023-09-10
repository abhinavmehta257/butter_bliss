import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppHeader from "../components/headers/AppHeader";
import Greeting from "../components/landingPage/Greeting";
import Search from "../components/landingPage/Search";
import FoodCard from "../components/cards/FoodCard";
import PopularDished from "../components/PopularDishes";
import WhyChooseUs from "../components/cards/WhyChooseUs";
import MoodToday from "../components/MoodToday";
import Footer from "../components/navigation/Footer";
export default function Home() {
  return (
    <div className="bg-stone-100 pb-[58px]">
      <div className="md:w-[35%] lg:w-[35%] m-auto bg-white">
        <AppHeader />
        <div className="container p-[16px]">
          <Greeting />
          <div className="mt-[16px] pb-[16px]">
            <Search />
          </div>
          <PopularDished/>
          <div className="mt-[25px]">
            <WhyChooseUs />
          </div>
          <div>
            <MoodToday />
          </div>
        </div>
        <div className="fixed bottom-0 w-full md:w-[35%]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

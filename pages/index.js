import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppHeader from "../components/headers/AppHeader";
import Greeting from "../components/landingPage/Greeting";
import Search from "../components/landingPage/Search";
import FoodCard from "../components/cards/FoodCard";
import PopularDished from "../components/PopularDishes";
import WhyChooseUs from "../components/cards/WhyChooseUs";
export default function Home() {
  return (
    <>
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
      </div>
    </>
  );
}

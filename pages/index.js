import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppHeader from "../components/headers/AppHeader";
import Greeting from "../components/landingPage/Greeting";
import Search from "../components/landingPage/Search";
import FoodCard from "../components/cards/FoodCard";
export default function Home() {
  return (
    <>
      <AppHeader />
      <div className="container p-[16px]">
        <Greeting />
        <div className="pt-[16px] pb-[16px]">
          <Search />
        </div>
        <FoodCard />
      </div>
    </>
  );
}

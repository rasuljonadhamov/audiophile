"use client";
import { Provider } from "react-redux";
import Hero from "./components/Home/Hero";
import store from "./store/store";
import Header from "./components/Header";
import PageToShop from "./components/Home/PageToShop";
import Speaker from "./components/Home/Speaker";
import FullImg from "./components/Home/FullImg";
import SpeakerComponent from "./components/Home/SpeakerComponent";
import BootomSection from "./components/Home/BootomSection";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Hero />
      <PageToShop />
      <Speaker />
      <FullImg />
      <SpeakerComponent />
      <BootomSection />
    </Provider>
  );
}

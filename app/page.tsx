"use client";
import { Provider } from "react-redux";
import Hero from "./components/Hero";
import store from "./store/store";
import Header from "./components/Header";
import PageToShop from "./components/PageToShop";
import Speaker from "./components/Speaker";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Hero />
      <PageToShop />
      <Speaker />
    </Provider>
  );
}

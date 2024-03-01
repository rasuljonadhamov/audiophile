"use client";
import { Provider } from "react-redux";
import Hero from "./components/Hero";
import store from "./store/store";
import Header from "./components/Header";
import PageToShop from "./components/PageToShop";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Hero />
      <PageToShop />
    </Provider>
  );
}

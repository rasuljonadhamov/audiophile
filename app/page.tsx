"use client";
import { Provider } from "react-redux";
import Hero from "./components/Hero";
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Hero />
    </Provider>
  );
}

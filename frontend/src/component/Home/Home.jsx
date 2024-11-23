import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel.jsx";
import RestaurantCard from "../Restaurant/RestaurantCard.jsx";
const restaurant = [1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Food Plaza</p>
          <p className="z-10 text-gray-200 text-xl lg:text-4xl">
            "Your Favorite Food, Just a Tap Away!"
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>

        <div className="fadeout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-200 py-3 pb-10">
          Top Meals
        </p>
        <MultiItemCarousel />
      </section>
      <section className="ps-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-gray-200 pb-5">
          Order From Top Rated Restaurants!!
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.map((item) => (
            <RestaurantCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

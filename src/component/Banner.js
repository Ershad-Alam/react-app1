import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="bg_banner grid  items-center">
        <div className="w-10/12 mx-auto grid grid-cols-2 items-center">
          <div className="banner_content">
            <h1 className="text-6xl text-lime-400 font-bold uppercase">
              International Award Winning network specialists
            </h1>
            <p className="text-2xl mt-8 text-white">
              Critical Communications | ICT | MSP
            </p>
          </div>
          <div className="banner_content">
            <NavLink>
              <img
                src="https://vertel.com.au/assets/images/laptop-banner-home.webp"
                alt="video-banner"
              />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

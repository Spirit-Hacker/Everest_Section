import React, { useEffect, useRef, useState } from "react";
import Everest from "../assets/images/everest.png";
import Runway from "../assets/images/runway.png";
import Altitude from "../assets/images/altitude.svg";
import Calender from "../assets/images/calender.svg";
import HourGlass from "../assets/images/hourGlass.svg";
import MountailLogo from "../assets/images/mountailLogo.svg";
import Shoe from "../assets/images/shoe.svg";
import Sun from "../assets/images/sun.svg";
import IternaryBackground from "../assets/images/iternaryBackground.png";
import Instructions from "./Instructions";
import Iternary from "./Iternary";

const EverestSection = () => {
  const stickyNavRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleScroll = () => {
    if (stickyNavRef.current) {
      setIsSticky(window.scrollY > stickyNavRef.current.offsetTop);
      setNavPosition(stickyNavRef.current.offsetTop);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="w-[100%] h-[100vh] relative overflow-x-hidden">
        <img src={Everest} className="w-[100%] object-cover h-[100vh]" />
        <div className="absolute top-[5%] left-[10%] text-5xl font-semibold text-white">
          Everest Base Camp Trek
        </div>
      </div>

      {/* Hero section Bottom */}
      <div className="w-[100%] py-10 px-28 flex flex-col text-justify text-white gap-y-6 bg-[#679bc5]">
        <div className="flex flex-col w-[100%]">
          <p className="text-3xl font-semibold">Everest Base Camp Trek</p>
          <p className="font-medium">
            Conquer heights, embrace Himalayan majesty
          </p>
        </div>
        <div className="w-[100%] font-medium">
          <p>
            Embark on an extraordinary journey where the towering magnificence
            of Everest meets the cultural tapestry of the Himalayas. With Lhotse
            as your guide, the journey to Everest Base Camp unfolds as a
            symphony of unforgettable moments, spanning rugged trails, ancient
            Sherpa villages, and awe-inspiring panoramas. Traverse through the
            heart of the Khumbu region, immersing yourself in the grandeur of
            the world's highest peak, before discovering serenity at the
            legendary Everest Base Camp. Join us on a trek where every step
            becomes a story, etched into the annals of your mountain legacy.
          </p>
        </div>
      </div>

      {/* Sticky Navbar Section */}
      <div
        ref={stickyNavRef}
        className={`w-[100%] h-[60px] bg-black px-28 text-white flex items-center justify-between ${
          isSticky ? "fixed top-0 z-50 transition-all duration-300" : "relative"
        }`}
      >
        <div className="flex gap-7 font-semibold">
          <a
            href="#overview"
            className="cursor-pointer hover:text-slate-400 transition-all duration-300"
          >
            Overview
          </a>
          <a
            href="#gallery"
            className="cursor-pointer hover:text-slate-400 transition-all duration-300"
          >
            Gallery
          </a>
          <a
            href="#iternary"
            className="cursor-pointer hover:text-slate-400 transition-all duration-300"
          >
            Itinerary
          </a>
          <a className="cursor-pointer hover:text-slate-400 transition-all duration-300">
            Details
          </a>
          <a className="cursor-pointer hover:text-slate-400 transition-all duration-300">
            Essentials
          </a>
        </div>
        <div className="font-semibold uppercase bg-[#7b8b97] px-4 py-2 tracking-wider rounded-lg cursor-pointer hover:bg-[#44515c] transition-all duration-300">
          Enquire Now
        </div>
      </div>

      {/* Overview section */}
      <div id="overview" className="h-[400px] w-[100%] bg-[#1d1c1c] relative">
        <div className="h-[100%] w-[100%]">
          <img src={Runway} className="h-[100%] w-[100%] object-cover" />
        </div>

        <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-evenly">
          <div className="flex flex-col gap-3 w-[50%]">
            <div className="flex gap-7">
              <img src={MountailLogo} className="w-[120px]" />
              <img src={HourGlass} className="w-[120px]" />
              <img src={Shoe} className="w-[120px]" />
            </div>
            <div className="flex gap-[70px]">
              <img src={Altitude} className="w-[80px]" />
              <img src={Sun} className="w-[80px]" />
              <img src={Calender} className="w-[120px]" />
            </div>
          </div>

          <div className="flex items-center justify-center text-white bg-red-500">
            <div className="flex flex-col items-start w-[400px] gap-y-8 px-10 py-5 bg-black text-white">
              <div className="flex flex-col">
                <p className="text-slate-400">Starting From</p>
                <p className="font-semibold">USD $1600</p>
              </div>

              <div>
                <p className="text-justify text-wrap text-slate-400">
                  Feel free to adjust the details based on specific inclusions
                  or highlights of your trekking package. This snippet aims to
                  highlight the experience and value of the Everest Base Camp
                  trek while inviting potential trekkers to take action by
                  booking their adventure with you.
                </p>
              </div>

              <div className="bg-[#7b8b97] px-4 py-2 rounded-3xl font-semibold cursor-pointer hover:bg-[#44515c] transition-all duration-300">
                Download Treking Details
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain view section */}
      <div className="h-[500px] relative">
        <div className="h-[100%]">
          <img src={Everest} className="h-[100%] w-[100%]" />
        </div>
        <div className="absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] bg-[#abb8c39a] h-[90%] flex flex-col px-8 py-4 justify-around">
          <p className="text-3xl font-semibold">
            Highlights of the Everest Base Camp Trek
          </p>
          <p className="text-justify">
            At Lhotse, we specialize in crafting unforgettable adventures to
            Everest Base Camp, immersing you in the awe-inspiring beauty and
            rich culture of the Himalayas. Our treks are designed to offer a
            perfect blend of adventure, cultural exploration, and natural
            beauty, ensuring an experience that transcends the ordinary.
            Embarking on an Everest Base Camp trek with Lhotse means embarking
            on a journey of a lifetime. From the moment you set foot on the
            trail, you'll be surrounded by breathtaking mountain vistas, rugged
            terrain, and ancient Sherpa villages. Each day brings new adventures
            as you traverse through diverse landscapes, from lush forests to
            barren high-altitude terrain, all while soaking in the serenity and
            grandeur of the world's highest peaks. Our experienced guides are
            there every step of the way to ensure your safety and comfort,
            providing expert navigation, local insights, and support throughout
            the journey. Whether it's crossing high mountain passes, navigating
            challenging terrain, or acclimatizing to the altitude, our team is
            dedicated to ensuring you have the best possible experience on the
            trail. But the adventure doesn't end with the trek itself. Along the
            way, you'll have the opportunity to immerse yourself in the unique
            culture and traditions of the Sherpa people, visiting ancient
            monasteries, exploring remote mountain villages, and meeting local
            communities. These cultural encounters add depth and richness to
            your journey, offering insights into the lives and customs of the
            people who call this rugged landscape home. At Lhotse, we believe
            that adventure is not just about reaching the destination, but about
            the journey itself. With our Everest Base Camp treks, you'll not
            only conquer one of the world's most iconic trails, but you'll also
            embark on a profound personal journey of self-discovery,
            exploration, and transformation amidst the awe-inspiring beauty of
            the Himalayas.
          </p>
        </div>
      </div>

      {/* Gallery section */}
      <div id="gallery" className="h-[500px] bg-black"></div>

      {/* Iternary Section */}
      <div id="iternary" className="h-[200vh] w-[100%] relative">
        <div className="h-[100%] w-[100%]">
          <img
            src={IternaryBackground}
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
        </div>

        <div className="w-[90%] bg-[#1c3c4673] h-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="w-[50%] bg-[#1c3c4673] flex rounded-xl items-center justify-around text-white mx-auto p-6 mt-6">
            <div
              className={`text-3xl font-semibold cursor-pointer ${
                !showInstructions && "underline"
              }`}
              onClick={() => setShowInstructions(false)}
            >
              Trek Iternary
            </div>
            <div
              className={`text-3xl font-semibold cursor-pointer ${
                showInstructions && "underline"
              }`}
              onClick={() => setShowInstructions(true)}
            >
              Instructions
            </div>
          </div>

          <div>{showInstructions ? <Instructions /> : <Iternary />}</div>
        </div>
      </div>
    </div>
  );
};

export default EverestSection;

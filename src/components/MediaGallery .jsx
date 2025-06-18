import React, { useEffect } from "react";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Link } from "react-router-dom";

gsap.registerPlugin(InertiaPlugin);

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/medias/${(i + 1).toString().padStart(2, "0")}.png`,
  title: `Project ${i + 1}`,
  path: `/projects/${i + 1}` // Change this to match your actual routes
}));

const MediaGallery = () => {
  useEffect(() => {
    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0;

    const root = document.querySelector(".mwg_effect000");

    const handleMouseMove = (e) => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;
      oldX = e.clientX;
      oldY = e.clientY;
    };

    root.addEventListener("mousemove", handleMouseMove);

    const mediaElements = root.querySelectorAll(".media");
    mediaElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const tl = gsap.timeline({
          onComplete: () => tl.kill(),
        });
        tl.timeScale(1.2);
        const image = el.querySelector("img");

        tl.to(image, {
          inertia: {
            x: { velocity: deltaX * 30, end: 0 },
            y: { velocity: deltaY * 30, end: 0 },
          },
        });
        tl.fromTo(
          image,
          { rotate: 0 },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<"
        );
      });
    });

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="mwg_effect000 h-screen overflow-y-auto relative grid place-items-start px-8 py-28">
      {/* Header */}
      <div className="header fixed top-0 left-0 w-full bg-black border-b border-[#323232] text-[#BAB8B9] grid grid-cols-[1fr_auto_1fr] items-center p-[20px_25px] z-10 max-md:flex max-md:justify-between max-md:p-[15px]">
        <div>
          <p className="button button1 bg-[#232323] text-sm uppercase rounded-full h-12 px-5 flex items-center gap-1.5 w-max">
            <img src="/assets/medias/01.png" alt="" className="w-[22px] h-auto block" />
            <span>3D & stuff</span>
          </p>
        </div>
        <div className="text-[26px] max-md:hidden">
          12 items saved in your collection
        </div>
        <div className="flex justify-end">
          <p className="button button2 border border-[#323232] text-sm uppercase rounded-full h-12 px-5 flex items-center w-max">
            Add more
          </p>
        </div>
      </div>

      {/* Media Grid */}
      <div className="medias grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-10">
        {images.map(({ src, title, path }, index) => (
          <div key={index} className="media group bg-[#1c1c1e] p-4 rounded-xl shadow-lg hover:shadow-teal-500/20 transition duration-300">
            <img
              src={src}
              alt={`media-${index + 1}`}
              className="rounded-lg w-full h-[200px] object-contain mb-4 pointer-events-none will-change-transform"
            />
            <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
            <Link
              to={path}
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-600 transition"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaGallery;

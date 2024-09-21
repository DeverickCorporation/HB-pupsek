import React, { useEffect, useState } from "react";

import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import map from "../../assets/map.jpg";
import styles from "./Part1.module.css";
import vitya from "../../assets/vitya.jpg";

export default function Part1() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startScroll = 2961.333251953125;
  const endScroll = 3294.666748046875;
  const startRight = 207;
  const startBottom = 162;
  const endRight = 1061;
  const endBottom = 499;

  let right = startRight;
  let bottom = startBottom;

  if (scrollPosition < startScroll) {
    right = startRight;
    bottom = startBottom;
  } else if (scrollPosition > endScroll) {
    right = endRight;
    bottom = endBottom;
  } else {
    const progress = (scrollPosition - startScroll) / (endScroll - startScroll);
    right = startRight + (endRight - startRight) * progress;
    bottom = startBottom + (endBottom - startBottom) * progress;
  }

  return (
    <div className={styles.part1}>
      <p className="font-120 unifraktur text-center">Part 1</p>
      <p className="font-80 unifraktur margin-top-30 text-center">
        Naсh Deutschland
      </p>
      <div className="margin-auto margin-top-60 width-100 position-relative">
        <img src={map} alt="Map" />
        <img
          className="position-absolute vitya"
          src={vitya}
          alt="Vitya"
          style={{
            right: `${right}px`,
            bottom: `${bottom}px`,
          }}
        />
      </div>

      <div className="d-flex justify-content-center margin-top-60 fit">
        <img className={`${right == endRight ? 'screemer visible' : 'screemer'}`} src={img3}></img>
        <img className={`${right == endRight ? 'screemer visible' : 'screemer'}`} src={img4}></img>
      </div>
    </div>
  );
}

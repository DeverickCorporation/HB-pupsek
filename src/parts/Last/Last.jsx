import { useEffect, useState } from "react";

import img1 from "../../assets/Last/i1.jpg";
import img2 from "../../assets/Last/i2.jpg";
import img3 from "../../assets/Last/i3.jpg";
import omg1 from "../../assets/Last/1.png";
import omg2 from "../../assets/Last/2.png";
import styles from "./Last.module.css";

export default function Last() {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const s1 = 7500;
  const s = 7100;
  const end = 8100;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const rotateImages = () => {
      const speedFactor = scrollY >= s1 ? (scrollY - s1) * 0.025 : 0; // Speed up after scrollY = 3000
      setRotation((prevRotation) => prevRotation + speedFactor); // Base speed 0.1, increased by scroll
      animationFrameId = requestAnimationFrame(rotateImages);
    };

    animationFrameId = requestAnimationFrame(rotateImages);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);

  const opacity = Math.min((scrollY - s) / 500, 1); // Adjust opacity after scrollY = 3000
  const bikeOpacity = Math.max((end - scrollY) / 500, 0);

  return (
    <div className={styles.last}>
      <div className={styles.flyC}>
        <img
          src={omg1}
          alt="Biker 1"
          style={{ transform: `rotate(${rotation}deg)`, opacity: bikeOpacity }} // Continuous rotation with increasing speed based on scroll
          className={styles.bike}
        />
        <img
          src={omg2}
          alt="Biker 2"
          style={{ transform: `rotate(${rotation}deg)`, opacity: bikeOpacity }} // Continuous rotation with increasing speed based on scroll
          className={`${styles.bike} ${styles.big}`}
        />
        <div className={styles.fly} style={{ opacity }}></div>
      </div>

      <div className={styles.grid}>
        <img src={img3}></img>
        <img src={img2}></img>
        <img src={img1}></img>
        
      </div>
    </div>
  );
}

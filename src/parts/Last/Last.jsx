import { useEffect, useState } from "react";

import c1 from "../../assets/Last/c1.png";
import c2 from "../../assets/Last/c2.png";
import img1 from "../../assets/Last/i1.jpg";
import img2 from "../../assets/Last/i2.jpg";
import img3 from "../../assets/Last/i3.jpg";
import omg1 from "../../assets/Last/1.png";
import omg2 from "../../assets/Last/2.png";
import styles from "./Last.module.css";

export default function Last() {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const s1 = 7700;
  const s = 7500;
  const end = 8300;
  const startMove = 7700;
  const moveDistance = 400; // Distance the car will move across the screen

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
      const speedFactor = scrollY >= s1 ? (scrollY - s1) * 0.025 : 0; // Speed up after scrollY = 7700
      setRotation((prevRotation) => prevRotation + speedFactor); // Base speed 0.1, increased by scroll
      animationFrameId = requestAnimationFrame(rotateImages);
    };

    animationFrameId = requestAnimationFrame(rotateImages);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);

  useEffect(() => {
    if (scrollY >= startMove) {
      const relativeScroll = scrollY - startMove;
      const newPosition = Math.min(relativeScroll, moveDistance); // Divide by 5 for smooth movement
      setCarPosition(newPosition);
    } else {
      setCarPosition(0); // Reset position if scrollY is less than startMove
    }
  }, [scrollY]);

  const opacity = Math.min((scrollY - s) / 500, 1); // Adjust opacity after scrollY = 7100
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
        <img className={styles.pop} src={img3}></img>
        <img className={styles.pop} src={img2}></img>
        <img className={styles.pop} src={img1}></img>
        <img
          src={c1}
          className={styles.car}
          style={{
            transform: `translateX(${carPosition}px) rotate(60deg)`, // Apply horizontal movement based on scrollY
          }}
        />
        <img
          src={c2}
          className={styles.carL}
          style={{
            transform: `translateX(${-carPosition}px) rotate(-60deg)` , // Apply horizontal movement based on scrollY
          }}
        />
      </div>
    </div>
  );
}

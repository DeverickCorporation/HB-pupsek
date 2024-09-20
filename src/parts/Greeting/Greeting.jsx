import img1 from "../../assets/Part1/1.jpg"
import img2 from "../../assets/Part1/2.jpg"
import img3 from "../../assets/Part1/3.jpg"
import img4 from "../../assets/Part1/4.jpg"
import styles from "./Greeting.module.css";

export default function Greeting() {
  return (
    <div className={styles.greeting}>
      <p className={`waiting font-80 text-center`}>Пан Віктор</p>
      <p className={`love font-30 text-center margin-top-30`}>
        Бізнесмен, Мастер Спорта По Спорту (БМСПС)
      </p>
      <div className="d-flex space-between margin-top-60">
        <img src={img1}></img>
        <img src={img4}></img>
      </div>

      <div className="d-flex space-between">
        <img src={img3}></img>
        <img src={img2}></img>
      </div>
    </div>
  );
}

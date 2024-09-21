import g1 from "../../assets/Part2/g1.jpg";
import g2 from "../../assets/Part2/g2.jpg";
import g3 from "../../assets/Part2/g3.jpg";
import g4 from "../../assets/Part2/g4.jpg";
import g5 from "../../assets/Part2/g5.jpg";
import g6 from "../../assets/Part2/g6.jpg";
import img1 from "../../assets/Part2/1.png";
import img2 from "../../assets/vitya.jpg";
import styles from "./Part2.module.css";

export default function Part2() {
  return (
    <div className={styles.part2}>
      <img src={img1}></img>
      <p className={`waiting font-80 text-center margin-top-60 line-height-130`}>Спочатку робимо великий бізнес</p>
      <div className={styles.container}>
        <img src={g2}></img>
        <img src={g1}></img>
        <img src={g3}></img>

        <p  className='love'>Product Manager <br></br> (на складе)</p>
        <p className="love">CTO <br></br> (шиномонтаж)</p>
        <p className="love">
          Budget Optimizator  <br></br> (optimazed to €0)
        </p>

        <img src={g4}></img>
        <img src={g5}></img>
        <img src={g6}></img>
        <p className="love">Senior Frontend <br></br> <a href="https://eralinkd.github.io/proj/" target="_blank">(contact me)</a></p>
        <p className="love">RPA <br></br> (заменит нас роботами)</p>
        <p className="love">IGORA <br></br> (Егор або Ігор)</p>
      </div>
    </div>
  );
}

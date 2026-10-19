
import styles from "./card.module.css";

type Props = {
    title?: string;
    text?: string;
    imgSrc?: string;


};

export default function Card({title, text,imgSrc}: Props) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img
        src={imgSrc || "https://picsum.photos/200/300"}
        alt="Beispielbild"
      />
      <p>{text}</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
        alt="Flagge von Spanien"
      />
    </div>
  );
}

export function Döner({title, text, imgSrc}: Props) {
  return (
    <div className={styles.döner}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ad/D%C3%B6ner_kebab_slicing.jpg"
        alt="Döner"
      />
    </div>
  );
}

export function Pommes({title, text, imgSrc}: Props) {
  return (
    <div className={styles.pommes}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img
        src={imgSrc || "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Belgian_fries_in_Martelange_%2852957190094%29.jpg/960px-Belgian_fries_in_Martelange_%2852957190094%29.jpg"}
        alt="Pommes"
      />
    </div>
  );
}

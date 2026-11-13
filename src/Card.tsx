
import { useId, useState } from "react";
import styles from "./card.module.css";

type Props = {
  title?: string;
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
};

export default function Card({ title, text, imgSrc, imgAlt }: Props) {
  const cardId = useId();
  const contentId = `${cardId}-content`;
  const storageKey = `card-clicks-${cardId}`;
  const [clickCount, setClickCount] = useState(() => {
    const storedCount = Number(sessionStorage.getItem(storageKey));
    return Number.isSafeInteger(storedCount) && storedCount >= 0 ? storedCount : 0;
  });
  const [counter, setCounter] = useState(0);
  const [imageSeed, setImageSeed] = useState(() => Math.floor(Math.random() * 1000));
  const [isExpanded, setIsExpanded] = useState(true);
  const words = ["Sonne", "Wolke", "Apfel", "Fahrrad", "Blume", "Mond", "Kaffee", "Wald"];
  const randomWords = Array.from(
    { length: 3 },
    () => words[Math.floor(Math.random() * words.length)],
  );

  function handleCardClick() {
    const nextCount = clickCount + 1;
    sessionStorage.setItem(storageKey, String(nextCount));
    setClickCount(nextCount);
  }

  function handleToggle() {
    setIsExpanded((current) => !current);
  }

  function handleChangeImage() {
    setCounter((currentCounter) => currentCounter + 1);
    setImageSeed((currentSeed) => currentSeed + 1);
  }

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <h2>{title}</h2>
      <button
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        {isExpanded ? "Zuklappen" : "Aufklappen"}
      </button>
      <p>Klicks in diesem Tab: {clickCount}</p>
      <div id={contentId} hidden={!isExpanded}>
        <button onClick={handleChangeImage}>Klick mich</button>
        <p>Counter: {counter}</p>
        <img
          src={
            imgSrc && counter === 0
              ? imgSrc
              : `https://picsum.photos/seed/${imageSeed}/200/400`
          }
          alt={imgAlt || "Beispielbild"}
        />
        <p>{text}</p>
        <p>{imageSeed}</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
          alt="Flagge von Spanien"
        />
        <p>{randomWords.join(" ")}</p>
      </div>
    </div>
  );
}

export function Döner({ title, text, imgSrc, imgAlt }: Props) {
  return (
    <div className={styles.döner}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img
        src={
          imgSrc ||
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/D%C3%B6ner_kebab_slicing.jpg"
        }
        alt={imgAlt || "Döner"}
      />
    </div>
  );
}

export function Pommes({ title, text, imgSrc, imgAlt }: Props) {
  return (
    <div className={styles.pommes}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img
        src={
          imgSrc ||
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Belgian_fries_in_Martelange_%2852957190094%29.jpg/960px-Belgian_fries_in_Martelange_%2852957190094%29.jpg"
        }
        alt={imgAlt || "Pommes"}
      />
    </div>
  );
}

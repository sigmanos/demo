
import Card, { Döner, Pommes } from "./Card";
import styles from "./card.module.css";

function App() {
  return (
    <>
      <h1 className={styles.title}>Willkommen Osman</h1>

      <div className={styles.cardContainer}>
        <Card title="Osman" text="dwaad" />
        <Card title="Ahmet" text="Lorem ipsum" />
        <Card title="Mehmet" text="Dolor sit amet" />

        <Döner title="Döner" text="Mein Döner" />
        <Döner title="Döner" text="Mein Döner" />
        <Döner title="Döner" text="Mein Döner" />

        <Pommes title="Pommes" text="Meine Pommes" />
        <Pommes title="Pommes" text="Meine Pommes" />
        <Pommes title="Pommes" text="Meine Pommes" />
      </div>
    </>
  );
}

export default App;

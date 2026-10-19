
import Card, { Döner, Pommes } from "./Card";
import styles from "./card.module.css";

function App() {
  return (
    <>
      <h1 className={styles.title}>Willkommen Osman</h1>

      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />

        <Döner />
        <Döner />
        <Döner />

        <Pommes />
        <Pommes />
        <Pommes />
      </div>
    </>
  );
}

export default App;


import Card, { Döner, Pommes } from "./Card";
import styles from "./card.module.css";

function App() {
  return (
    <>
      <h1 className={styles.title}>Willkommen Osman</h1>

      <div className={styles.cardContainer}>
        <Card
          title="Osman"
          text="Mein Profilbild"
          imgSrc="https://picsum.photos/seed/osman/200/300"
          imgAlt="Zufälliges Profilbild"
        />
        <Card title="Ahmet" text="Lorem ipsum" />
        <Card title="Mehmet" text="Dolor sit amet" />

        <Döner
          title="Döner"
          text="Mein Lieblingsdöner"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ad/D%C3%B6ner_kebab_slicing.jpg"
          imgAlt="Ein frisch zubereiteter Döner"
        />
        <Döner title="ISkender" text="Mein Döner" />
        <Döner title="HAllo" text="Mein Döner" />

        <Pommes
          title="Pommes"
          text="Meine knusprigen Pommes"
          imgSrc="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Belgian_fries_in_Martelange_%2852957190094%29.jpg/960px-Belgian_fries_in_Martelange_%2852957190094%29.jpg"
          imgAlt="Belgische Pommes"
        />
        <Pommes title="Pomme frites" text="Meine Pommes" />
        <Pommes title="Pommes" text="Meine Pommes" />
      </div>
    </>
  );
}

export default App;

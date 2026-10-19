
type Props = {};

export default function Card({}: Props) {
  return (
    <div className="card">
      <h2>Hello World</h2>
      <img
        src="https://picsum.photos/200/300"
        alt="Beispielbild"
      />
      <p>Lorem ipsum</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
        alt="Flagge von Spanien"
      />
    </div>
  );
}

export function Döner({}: Props) {
  return (
    <div className="Döner">
      <h2>Döner</h2>
      <p>Mein Döner</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/D%C3%B6ner_kebab_slicing.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Döner" />
    </div>
  );
}

export function Pommes({}: Props) {
    return (
        <div className="Pommes">
            <h2>Pommes</h2>
            <p>Meine Pommes</p>
            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Belgian_fries_in_Martelange_%2852957190094%29.jpg/960px-Belgian_fries_in_Martelange_%2852957190094%29.jpg?utm_source=de.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="Pommes" />
        </div>
    );
}

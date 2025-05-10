import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

const textDesc = ['Fundamental', 'Crucial', 'Core', 'Rudimentary'];

const getRandom = () => { 
  return Math.floor(4 * Math.random());
};

const Header = () => {
  const desc = textDesc[getRandom()];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const Component = ({image, title, description}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>
            Core Concepts
          </h2>
          <ul>
            <Component {...CORE_CONCEPTS[0]}/>
            <Component {...CORE_CONCEPTS[1]}/>
            <Component {...CORE_CONCEPTS[2]}/>
            <Component {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

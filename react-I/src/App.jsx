import { CORE_CONCEPTS } from "./data";
import Header from "./components/header";
import Component from "./components/component";
import TabButton from "./components/tabButton";

function App() {
  const handleClick = (value) => {
    alert(value);
  };

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("Component")}>Components</TabButton>
            <TabButton onClick={() => handleClick("Props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("State")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

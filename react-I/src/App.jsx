import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/header";
import Component from "./components/component";
import TabButton from "./components/tabButton";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState();

  const handleClick = (value) => {
    setTopic(value);
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
            <TabButton isSelected={topic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
            <TabButton isSelected={topic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={topic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={topic === "state"} onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!topic ? <p>Please Select a Topic.</p> : <>
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>
                {EXAMPLES[topic].code}
              </code>
            </pre>
            </>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

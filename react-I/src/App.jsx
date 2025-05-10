import { CORE_CONCEPTS } from "./data";
import Header from "./components/header";
import Component from "./components/component";

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

import Header from "./components/header";
import Concepts from "./components/concepts";
import Examples from "./components/examples";

function App() {

  return (
    <div>
      <Header />
      <main>
        <Concepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;

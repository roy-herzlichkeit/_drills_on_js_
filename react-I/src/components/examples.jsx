import TabButton from "./tabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
    const [topic, setTopic] = useState();

    const handleClick = (value) => {
        setTopic(value);
    };

    return (
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
    );
}
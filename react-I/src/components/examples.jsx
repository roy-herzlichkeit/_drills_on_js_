import Section from "./section";
import TabButton from "./tabButton";
import { useState } from "react";
import TabContent from "./tabContent";
import Tabs from "./tabs";

export default function Examples() {
    const [topic, setTopic] = useState();

    const handleClick = (value) => {
        setTopic(value);
    };

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={<>
                <TabButton isSelected={topic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
                <TabButton isSelected={topic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
                <TabButton isSelected={topic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
                <TabButton isSelected={topic === "state"} onClick={() => handleClick("state")}>State</TabButton>
            </>}>
                <TabContent topic={topic}/>
            </Tabs>
        </Section>
    );
}
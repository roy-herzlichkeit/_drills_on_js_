import { CORE_CONCEPTS } from "../data";
import Concept from "./concept";

export default function Concepts() {
    return (
        <section id="core-concepts">
            <h2>
                Core Concepts
            </h2>
            <ul>
                {CORE_CONCEPTS.map((item) => <Concept key={item.title} {...item}/>)}
            </ul>
        </section>
    )
}
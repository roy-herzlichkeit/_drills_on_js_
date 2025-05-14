import { EXAMPLES } from "../data";

export default function TabContent({ topic }) {
    return (
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
    )
}
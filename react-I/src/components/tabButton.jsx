export default function TabButton(props) {
    const helloWorld = () => {
        alert("Hello World!");
    }
    return <li><button onClick={helloWorld}>{props.children}</button></li>;
};
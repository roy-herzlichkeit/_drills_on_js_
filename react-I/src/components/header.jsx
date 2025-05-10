import reactImg from "../assets/react-core-concepts.png";

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

export default Header;
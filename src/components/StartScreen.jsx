import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start-screen">
      <h1>Secret Word</h1>
      <p>Clique para começar!</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
};

export default StartScreen;

import "./App.css";
import { useState } from "react";
import niceList from "./utils/niceList";
import MerkleTree from "./utils/MerkleTree";
import main from "./client/index";

function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(-1);
  const tree = new MerkleTree(niceList);
  console.log(status);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="title">
        <h1 className="neonText">GIFT LIST</h1>
      </div>
      <div className="insert-name">
        <input
          type="text"
          placeholder="Insert your name..."
          className="in"
          onChange={handleChange}
        ></input>
        <button
          type="button"
          name="ricevi"
          className="but"
          onClick={async () => {
            (await main(name, tree)) ? setStatus(1) : setStatus(0);
          }}
        >
          Ricevi il tuo regalo
        </button>
      </div>
      {status == 1 && (
        <div>
          <div className="overlay-res"></div>
          <img
            className="confetti"
            src="/giphy.gif"
            alt=""
            onClick={() => setStatus(-1)}
          ></img>
          <div className="message">
            <p>Congrats! You have won a robot!</p>
          </div>
        </div>
      )}
      {status == 0 && (
        <div>
          {alert("Unfortunately you don't win :(")}
          {setStatus(-1)}
        </div>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Blocks from "./components/Blocks";
import { Button, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const initialState = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setIsXChance] = useState(false);
  const onClickBlock = (index: Number) => {
    let strings = Array.from(gameState);
    //@ts-ignore
    if (strings[index] === "") {
      //@ts-ignore
      strings[index] = isXChance ? "X" : "O";
    }
    setGameState(strings);
    setIsXChance(!isXChance);
  };
  const clearState = () => {
    setGameState(initialState);
  };
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      toast(`${winner} is Winner !!`);
      setTimeout(() => setGameState(initialState), 1000);
    }
    if (!gameState.includes("")) {
      toast("Opps! Nobody win");
      setTimeout(() => setGameState(initialState), 1000);
    }
  }, [gameState]);
  return (
    <div className="min-vh-100 d-flex flex-column bg-black justify-content-center">
      <ToastContainer position="bottom-center" limit={1} />
      <h1 className="text-danger bg-dark mb-4">Tic Tac Toe</h1>
      <main className="pt-4">
        <div className="">
          <Blocks
            className="border-bottom border-end"
            state={gameState[0]}
            handleClick={() => onClickBlock(0)}
          />
          <Blocks
            className="border-bottom border-end "
            state={gameState[1]}
            handleClick={() => onClickBlock(1)}
          />
          <Blocks
            className="border-bottom "
            state={gameState[2]}
            handleClick={() => onClickBlock(2)}
          />
        </div>
        <div className="">
          <Blocks
            className="border-bottom border-end "
            state={gameState[3]}
            handleClick={() => onClickBlock(3)}
          />
          <Blocks
            className="border-bottom border-end "
            state={gameState[4]}
            handleClick={() => onClickBlock(4)}
          />
          <Blocks
            className="border-bottom  "
            state={gameState[5]}
            handleClick={() => onClickBlock(5)}
          />
        </div>
        <div className="">
          <Blocks
            className="border-end "
            state={gameState[6]}
            handleClick={() => onClickBlock(6)}
          />
          <Blocks
            className="border-end "
            state={gameState[7]}
            handleClick={() => onClickBlock(7)}
          />
          <Blocks state={gameState[8]} handleClick={() => onClickBlock(8)} />
        </div>
        <div className=" m-5">
          <Button size="sm" variant="secondary" onClick={() => clearState()}>
            Clear
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

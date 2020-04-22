import React, { useState } from 'react';
import choice from "./helpers";
import "./Eightball.css";

/** Eightball: returns html of an eightball and holds state about msg, color, and count for each color */
function Eightball({ answers, initMessage, initColor }) {

  const [msg, setMsg] = useState(initMessage);
  const [color, setColor] = useState(initColor);
  let [green, setGreen] = useState(0);
  let [goldenrod, setGoldenrod] = useState(0);
  let [red, setRed] = useState(0);

  function clickHandler() {
    let answer = choice(answers);
    setMsg(answer.msg);
    setColor(answer.color);
    if (answer.color === "red") {
      setRed(oldRed => oldRed + 1);
    }
    else if (answer.color === "green") {
      setGreen(oldGreen => oldGreen + 1);
    }
    else if (answer.color === "goldenrod") {
      setGoldenrod(oldGoldenrod => oldGoldenrod + 1);
    }


  }

  function resetClick() {
    setMsg(initMessage);
    setColor(initColor);

    setGreen(0);
    setRed(0);
    setGoldenrod(0);
  }

  const colorChange = {
    backgroundColor: color,
    color: "white"
  }

  return (
    <div>
      <div onClick={clickHandler} className="eightball" style={colorChange}>

        <p className="msg"> {msg} </p>

      </div>
      <br></br>
      <button onClick={resetClick}>Reset!</button>
      <div className="counter">
        <p>
          Green: {green}
        </p>
        <p>
          Goldenrod: {goldenrod}
        </p>
        <p>
          Red: {red}
        </p>
      </div>
    </div>
  )
}


Eightball.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
  initMessage: "Think of a question!",
  initColor: "black"
}

export default Eightball ;
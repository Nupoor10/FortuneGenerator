import './App.css'
import React, { useState } from 'react'

export const generate = [
  {
    fortune: "Now is the time to try something new."
  },
  {
    fortune: "A dream you have will come true."
  },
  {
    fortune: "You will become great if you believe in yourself."
  },
  {
    fortune: "You will conquer obstacles to achieve success."
  },
  {
    fortune: "Do not mistake temptation for opportunity."
  },
  {
    fortune: "You will be called in to fulfill a position of high honor and responsibility."
  },
  {
    fortune: "Enjoy the good luck a companion brings you."
  },
  {
    fortune: "Keep your eye out for someone special."
  },
  {
    fortune: "You will travel to many exotic places in your lifetime."
  },
  {
    fortune: "Actions speak louder than fortune cookies."
  },
  {
    fortune: "Little by little, one travels far."
  },
  {
    fortune: "Joy is what happens to us when we allow ourselves to recognize how good things really are."
  },
  {
    fortune: "If you want the rainbow, you gotta put up with the rain!"
  },
  {
    fortune: "Love all, trust a few, do wrong to none."
  },
  {
    fortune: "One bad chapter doesn't mean your story is over."
  },
  {
    fortune: "You are not what you've done. You are what you keep doing."
  }
]

export default function App() {

  const [visible, setVisible] = useState(true);

  let initialFortune = {
    fortune: "Wealth awaits you very soon."
  }

  const [fortune, setFortune] = useState(initialFortune);

  const generateFortune = () => {
    console.log(generate.length);
    var random = Math.floor(Math.random() * (generate.length - 0)) + 0;
    console.log(random);
    setFortune(generate[random]);
    console.log(fortune);
  }

  const handleClick = () => {
    setVisible(false);
    generateFortune();
  }

  const handleReset = () => {
    setVisible(true)
  }

  return (
    <div className='main'>
      <h1>FORTUNE COOKIE</h1>
      <h3>CLICK ON THE FORTUNE COOKIE TO READ YOUR FORTUNE</h3>
      <div className='fortune-component'>
        <img
          className="cookie-image"
          onClick={handleClick}
          src={visible ? "./images/fortune-cookie-close.png" : "./images/fortune-cookie-open.png"}
          alt="fortune-cookie"
        />
        {visible ? " " : <h1> {fortune.fortune} </h1>}
      </div>
      <button type='button' className="generate-btn" onClick={handleReset}>GENERATE MORE</button>
    </div>
  )
}

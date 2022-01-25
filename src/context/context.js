import React, {createContext, useEffect, useState, useRef} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const phrases = [
    'an arm and a leg',
    'a piece of cake',
    'back to square one',
    'cut to the chase',
    'burst your bubble',
    'close but no cigar'
  ];

  // const [phrase, setPhrase] = useState('')
  const [gameKey, setGameKey] = useState([]);
  const [correctKeys, setCorrectKeys] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [scoreToWin, setScoreToWin] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [selectedKey, setSelectedKey] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [timer, setTimer] = useState(null);
  const [pauseTimer, setPauseTimer] = useState(true);
  const [rendering, setRendering] = useState(true);

  const filterSpaces = gameKey.filter((key, index) => key !== ' ')
  const removeDuplicates = filterSpaces.filter((item, index) => filterSpaces.indexOf(item) === index);


  useEffect( () => {
    if (firstRender === true || gameOver === true || gameWin === true || pauseTimer === true) {
      if (rendering) {
        const randomNum = Math.floor(Math.random() * phrases.length)
        const phrase = phrases[randomNum];
        setGameKey(phrase.split(''))
        setCorrectKeys([]);
        setCorrectCount(0);
        setIncorrectCount(0);
        setSelectedKey([]);
        setFirstRender(false);
        setTimer(60);
        setPauseTimer(true);
        setRendering(false)
      }
      setTimer(60);
    }

    if (incorrectCount >= 3) {
      setGameOver(true);
      setPauseTimer(true)
      setRendering(true)
    } else if (correctCount >= scoreToWin && scoreToWin !== 0) {
      setGameWin(true);
      setPauseTimer(true)
      setRendering(true)
    } else if (timer === 0) {
      setPauseTimer(true);
      setGameOver(true);
      setRendering(true)
    }

    setScoreToWin(removeDuplicates.length)

  }, [incorrectCount, firstRender, gameOver, correctCount, gameWin, timer]);



  const checkGuess = (guess) => {
    const doesLetterExist = gameKey.find((letter => letter.toLowerCase() === guess.toLowerCase()))

      if (doesLetterExist === guess) {

        console.log(doesLetterExist.toLowerCase())
        console.log(guess.toLowerCase())

        if (correctKeys) {
          setCorrectKeys([
            ...correctKeys,
            guess
          ])
          setCorrectCount(correctCount + 1);
          setSelectedKey([
            ...selectedKey,
            guess
          ])
        } else {
          setCorrectKeys(guess)
          setCorrectCount(correctCount + 1);
          setSelectedKey([
            ...selectedKey,
            guess
          ])
        }

      } else {
        setIncorrectCount(incorrectCount + 1);
        setSelectedKey([
          ...selectedKey,
          guess
        ])
      }
      setPauseTimer(false);
  }



  function startTimer() {

      if (!pauseTimer) {
        setTimeout( () => {
          setTimer(timer - 1)
        }, 1000)
      }
    }

startTimer()




  return (
    <appContext.Provider value={{
      data: {
        gameKey,
        correctCount,
        incorrectCount,
        correctKeys,
        selectedKey,
        gameOver,
        gameWin,
        scoreToWin,
        firstRender,
        timer
      },
      actions: {
        checkGuess,
        setFirstRender,
        setGameOver,
        setGameWin,
        startTimer,
        setPauseTimer
      }
    }}>
      {props.children}
    </appContext.Provider>
  )

}

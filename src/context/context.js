import React, {createContext, useEffect, useState, useRef} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const phrases = [
    'test phrase one',
    'test phrase two',
    'test phrase three',
    'test phrase four',
    'test phrase five',
    'test phrase six'
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


  const filterSpaces = gameKey.filter((key, index) => key !== ' ')
  const removeDuplicates = filterSpaces.filter((item, index) => filterSpaces.indexOf(item) === index)





  useEffect( () => {
    if (firstRender === true || gameOver === true || gameWin === true || pauseTimer === true) {
      const randomNum = Math.floor(Math.random() * phrases.length)
      const phrase = phrases[randomNum]
      setGameKey(phrase.split(''))
      setCorrectKeys([]);
      setCorrectCount(0);
      setIncorrectCount(0);
      setSelectedKey([]);
      setFirstRender(false);
      setTimer(60);
      setPauseTimer(true);
      console.log('rendering')
    }

    if (incorrectCount >= 3) {
      setGameOver(true);
      setPauseTimer(true)
      setTimer(60);
    } else if (correctCount >= scoreToWin && scoreToWin !== 0) {
      setGameWin(true);
      setPauseTimer(true)
      setTimer(60);
    }

    setScoreToWin(removeDuplicates.length)

  }, [incorrectCount, firstRender, gameOver, correctCount, gameWin]);

  const checkGuess = (guess) => {
    const doesLetterExist = gameKey.find((letter) => letter === guess)
      if (doesLetterExist === guess) {
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


  console.log(pauseTimer.current)



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

import React, {createContext, useEffect, useState} from 'react';

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

  const filterSpaces = gameKey.filter((key, index) => key !== ' ')
  const removeDuplicates = filterSpaces.filter((item, index) => filterSpaces.indexOf(item) === index)


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
  }


  useEffect( () => {

    if (firstRender === true || gameOver === true || gameWin === true) {
      const randomNum = Math.floor(Math.random() * phrases.length)
      const phrase = phrases[randomNum]
      setGameKey(phrase.split(''))
      setCorrectKeys([]);
      setCorrectCount(0);
      setIncorrectCount(0);
      setSelectedKey([]);
      setFirstRender(false);
    }

    if (incorrectCount >= 3) {
      setGameOver(true);
    } else if (correctCount >= scoreToWin && scoreToWin !== 0) {
      setGameWin(true);
    }

    setScoreToWin(removeDuplicates.length)

  }, [incorrectCount, firstRender, gameOver, correctCount, gameWin]);


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
      },
      actions: {
        checkGuess,
        setFirstRender,
        setGameOver,
        setGameWin,
      }
    }}>
      {props.children}
    </appContext.Provider>
  )

}

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
  const [incorrectCount, setIncorrectCount] = useState(0);

  const checkGuess = (guess) => {

    console.log('check')

    const doesLetterExist = gameKey.find((letter) => letter === guess)
    
      if (doesLetterExist === guess) {

        if (correctKeys) {
        setCorrectKeys([
          ...correctKeys,
          guess
        ])
        setCorrectCount(correctCount + 1);
        } else {
          setCorrectKeys(guess)
          setCorrectCount(correctCount + 1);
        }
      } else {
        setIncorrectCount(incorrectCount + 1);
      }


  }


  useEffect( () => {
    const randomNum = Math.floor(Math.random() * phrases.length)
    const phrase = phrases[randomNum]
    setGameKey(phrase.split(''))
  }, [])



  return (
    <appContext.Provider value={{
      data: {
        gameKey,
        correctCount,
        incorrectCount,
        correctKeys
      },
      actions: {
        checkGuess,
      }
    }}>
      {props.children}
    </appContext.Provider>
  )

}

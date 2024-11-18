import Flashcard from './Flashcard.jsx';
import Counter from './Counter.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

export default function Game({ deck, howManyZaps }) {

  const numZaps = parseInt(howManyZaps, 10);

  const getRandomItems = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, num); 
  };

  const [randomDeck] = useState(() => getRandomItems(deck, numZaps));
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [statusButtons, setStatusButtons] = useState([]);
  const [done, setDone] = useState(false);

  return (
    <>
      <StyledTitle>
        <img src="logo.png" alt="" />
        <h1>ZapRecall</h1>
      </StyledTitle>
      <StyledUl $done={done}>
        {randomDeck.map((qAndA, index) => (
          <Flashcard 
            key={index}
            qAndA={qAndA} 
            howManyZaps={numZaps} 
            questionNumber={index + 1} 
            answeredQuestions={answeredQuestions} 
            setAnsweredQuestions={setAnsweredQuestions}
            setStatusButtons={setStatusButtons} 
          />
        ))}
      </StyledUl>

      <Counter 
        howManyZaps={numZaps} 
        answeredQuestions={answeredQuestions} 
        setAnsweredQuestions={setAnsweredQuestions}
        statusButtons={statusButtons} 
        done={done}
        setDone={setDone}
      />
    </>
  );
}

Game.propTypes = {
  deck: PropTypes.array.isRequired,
  howManyZaps: PropTypes.string.isRequired,
};

// STYLED COMPONENTS
const StyledTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
padding: 25px 0;
  img {
    width: 75px;
    height: auto;
  }
  h1 {
    color: white;
    font-size: 35px;
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  gap: 20px;
  padding-bottom: ${props => (props.$done ? '162px' : '80px')};
`

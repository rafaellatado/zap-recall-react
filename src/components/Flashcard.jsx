import PropTypes from "prop-types";
import { useState } from 'react';
import styled from "styled-components";

export default function Flashcard({ qAndA, questionNumber, answeredQuestions, setAnsweredQuestions, setStatusButtons }) {

  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [qAndACardSize, setQAndACardSize] = useState(false);
  const [statusDynamicImg, setStatusDynamicImg] = useState()

  function handleClick(whichButton) {
    if (!hasAnswered) {
      setAnsweredQuestions(answeredQuestions + 1);
      setHasAnswered(true);
      setStatusButtons(prevArr => [...prevArr, whichButton]);

      if (whichButton === 'Não lembrei') {
        setStatusDynamicImg('public/assets/icone_erro.png')
      }
      else if( whichButton === 'Quase não lembrei') {
        setStatusDynamicImg('public/assets/icone_quase.png')
      } else {
        setStatusDynamicImg('public/assets/icone_certo.png')
      }
    } 
  }

  function handlePlayButton() {
    setShowQuestion(true);
    setQAndACardSize(true);
  }

  if(hasAnswered === true) {
    return (
      <StyledFour $statusDynamicImg={statusDynamicImg}>
        <p>Pergunta {questionNumber}</p>
        <img src={statusDynamicImg} alt="" />
      </StyledFour>
    )
  }

  else if (showAnswer === true) {
    return (
      <StyledThird>
        <p>{qAndA.answer}</p>
        <div>
          <button onClick={() => handleClick('Não lembrei')}>Não lembrei</button>
          <button onClick={() => handleClick('Quase não lembrei')}>Quase não lembrei</button>
          <button onClick={() => handleClick('Zap!')}>Zap!</button>
        </div>
      </StyledThird>
    )
  }

  else if (showQuestion === true) {

    return (
      <StyledSecond>
        <p>{qAndA.question}</p>
        <button onClick={() => setShowAnswer(true)}>
          <ion-icon name="refresh-outline"></ion-icon>
        </button>
      </StyledSecond>
    )

  } else {

    return (
      <StyledFirst qAndACardSize={qAndACardSize}>
        <p>Pergunta {questionNumber}</p>
        <button onClick={handlePlayButton}>
          <ion-icon name="play-outline"></ion-icon>
        </button>
      </StyledFirst>
    )
  }
}

Flashcard.propTypes = {
  qAndA: PropTypes.object.isRequired,
  questionNumber: PropTypes.number.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  setAnsweredQuestions: PropTypes.func.isRequired,
  setStatusButtons: PropTypes.func.isRequired,
};

// STYLED COMPONENTS
const StyledFirst = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== 'qAndACardSize', 
})`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  width: 80vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  /* height: ${props => (props.qAndACardSize ? '50px' : 'auto')}; */
  p {
    cursor: default;
  }
  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  ion-icon {
    font-size: 24px;
  }
`

const StyledSecond = styled.li`
  all: unset;
  box-sizing: border-box;
  background-color: #FFFFB3;
  width: 80vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  height: 160px;
  position: relative;
  p {
    text-align: left;
  }
  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  ion-icon {
    font-size: 24px;
  }
`

const StyledThird = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  box-sizing: border-box;
  background-color: #FFFFB3;
  width: 80vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  height: 160px;
  p {
    text-align: left;
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    button:first-child {
      background-color: #E63946;
      color: white;
      border-radius: 5px;
    }
    button:nth-child(2) {
      background-color: #F4A261;
      color: white;
      border-radius: 5px;
    }
    button:nth-child(3) {
      background-color: #2A9D8F;
      color: white;
      border-radius: 5px;
    }
  }
  p {
    cursor: default;
  }
  button {
    all: unset;
    cursor: pointer;
    font-size: 13px;
    width: 90px;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: center;
    padding: 10px;
  }
  ion-icon {
    font-size: 24px;
  }
`

const StyledFour = styled.li`
  all: unset;
  box-sizing: border-box;
  background-color: white;
  width: 80vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  display: flex;
  justify-content: space-between;
  p {
    text-decoration: line-through;
    color: ${props => {
      if (props.$statusDynamicImg === 'public/assets/icone_erro.png') {
        return 'red';
      } else if (props.$statusDynamicImg === 'public/assets/icone_quase.png') {
        return 'yellow';
      } else if (props.$statusDynamicImg === 'public/assets/icone_certo.png') {
        return 'green';
  }
    }}
  }
`

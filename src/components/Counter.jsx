import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Counter({ howManyZaps, answeredQuestions, statusButtons, done, setDone }) {

  const [finalMessage, setFinalMessage] = useState('');

  useEffect(() =>{
    if (answeredQuestions === howManyZaps) {
      setDone(true);

      let whichMessage1 = statusButtons.filter(item => item === 'Não lembrei'); 
      let whichMessage2 = statusButtons.filter(item => item === 'Quase não lembrei');

      const whichMessage = [...whichMessage1, ...whichMessage2];

      if (whichMessage.length === 0) {
        setFinalMessage('Parabéns! Você acertou tudo e alcançou sua meta com sucesso!')
      } else if (whichMessage.length === 1) {
        setFinalMessage('Quase lá! Só falta um empurrãozinho para alcançar sua meta!')
      } else {
        setFinalMessage('Cada tentativa é um passo mais perto! Continue tentando e logo vai alcançar sua meta!')
      }
    };
  }, [answeredQuestions, howManyZaps, statusButtons, setDone])

  function refreshPage() {
    window.location.reload()
  }

  return (
    <StyledCounter>
      {!done && <p>{answeredQuestions}/{howManyZaps} CONCLUÍDOS</p>}
      <div>
        {done && <p>{finalMessage}</p>}
        {done && <button onClick={refreshPage}>Reiniciar Recall</button>}
      </div>
    </StyledCounter>
  )
}

Counter.propTypes = {
  howManyZaps: PropTypes.number.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  setAnsweredQuestions: PropTypes.func.isRequired,
  statusButtons: PropTypes.array.isRequired,
  done: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
};

// STYLED COMPONENTS
const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 20px 20px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  div p {
    text-align: center;
    max-width: 400px;
  }
  div button {
    all: unset;
    cursor: pointer;
    border: solid 1px grey;
    padding: 10px;
    border-radius: 5px;
  }
`

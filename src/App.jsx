import DECKS from './mock.js';
import Game from './components/Game.jsx';
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles.js';

function App() {

  const [whichDeck, setWhichDeck] = useState('');
  const [howManyZaps, setHowManyZaps] = useState('');
  const [goGame, setGoGame] = useState(false);

  if (goGame === true) {
    
    return (
      <>
        <GlobalStyles />
          <Game deck={DECKS[whichDeck]} howManyZaps={howManyZaps} />
      </>
    )

  } else {

    return (
      <>
        <GlobalStyles />
          <StyledMasterDiv> 
            <img src="src/assets/logo.png" alt="" />

            <h1>ZapRecall</h1>

            <StyledInputs>
              <select value={whichDeck} onChange={e => setWhichDeck(e.target.value)}>
                <option value=''>Escolha seu deck</option>
        
                {Object.keys(DECKS).map(deckName => (
                  <option key={deckName} value={deckName}>
                    {deckName}
                  </option>
                ))}
              </select>
        
              <select value={howManyZaps} onChange={e => setHowManyZaps(e.target.value)}>
                <option value={0}>Digite sua meta de zaps</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
        
              <StyledStartRecall 
                onClick={() => setGoGame(true)}
                whichDeck={whichDeck}
                howManyZaps={howManyZaps}
              >
                Iniciar Recall
              </StyledStartRecall>
            </StyledInputs>
          </StyledMasterDiv>
      </>
    );
  }
}

export default App;

// STYLED COMPONENTS
const StyledMasterDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 20%; 
  left: 50%;
  transform: translateX(-50%); 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  img {
    width: 75px;
    height: auto;
  }
  h1 {
    color: white;
    font-size: 35px;
  }
`

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  gap: 12px;
  select {
    all: unset;
    appearance: auto;
    font-size: 14px;
    width: 220px;
    height: 15px;
    padding: 8px 10px 8px 10px;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
  }
`

const StyledStartRecall = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  width: 220px;
  height: 15px;
  padding: 8px 10px 8px 10px;
  pointer-events: ${props => (props.whichDeck && props.howManyZaps ? 'auto' : 'none')};
  background-color: ${props => (props.whichDeck && props.howManyZaps ? 'white' : '#f0f0f0')};
  color: ${props => (props.whichDeck && props.howManyZaps ? 'black' : '#b0b0b0')};
`
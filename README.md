# https://rafaellatado.github.io/zap-recall-react/

# Zap Recall

You can view the Zap Recall App live at <a href="https://rafaellatado.github.io/zap-recall-react/" target="_blank">https://rafaellatado.github.io/zap-recall-react/</a>.

### Description
Zap Recall is a flashcard-based study app where users can test their knowledge on various topics by flipping cards and marking their recall accuracy. The app encourages active recall by categorizing responses into different levels of recall.

### Features

- Users can interact with flashcards by flipping them to reveal questions and answers.

- Each flashcard has three response options:

1. "Não lembrei" (Did not recall)

2. "Quase não lembrei" (Barely recalled)

3. "Zap!" (Instant recall)

- Flashcards update their status based on user responses and cannot be opened again after being answered.

- A completion counter tracks the number of answered flashcards.

- Preloaded deck of at least 8 flashcards, with a default React-based question set.

- Fully responsive mobile-first design following Figma layout specifications.

### Technologies Used

- React (Vite): Frontend framework for rendering components dynamically.

- Styled-components: CSS-in-JS approach for styling.

- JavaScript (ES6+): For managing state and logic.

- Vercel: For deployment.

### Project Guidelines

- The app uses only React state management (no Context API or React Router).

- All flashcards are stored in an array and rendered dynamically using .map().

- Users can track their progress with a completion counter.

- The UI dynamically updates to reflect answered flashcards.

- The layout adapts to different screen sizes for a seamless mobile experience.

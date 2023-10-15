import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question: "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  },
  {
    id: 2003,
    question: "State is an _______, owned by the component in which it is declared?",
    answer: "Internal Data"
  },
  {
    id: 2004,
    question: "Props is an _______, owned by the Parent component?",
    answer: "External Data"
  },
  {
    id: 2005,
    question: "What is React's data flow type?",
    answer: "One way data flow"
  }
];

function FlashCards() {
  const [selectId, setSelectId] = useState(null);
  return (
    <div className="flashcards">
        {questions.map((item) => (
            <div key={item.id} className={item.id === selectId ? "selected" : ""} onClick={ () => handleClick(item.id) }>
                <p>{ item.id === selectId ? item.answer : item.question }</p>
            </div>
        ))}
    </div>
  )

  function handleClick(id){
    setSelectId(id !== selectId ? id : null)
  }
}

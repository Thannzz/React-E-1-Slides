import Slide from "./Components/Slide";
import "./styles.css";
import { useState } from "react";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  function handlePrev(e) {
    setIndex(index - 1);
  }
  function handleNext(e) {
    setIndex(index + 1);
  }
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>

      <Slide title={data[index].title} desc={data[index].description} />

      <button data-testid="prev" disabled={index === 0} onClick={handlePrev}>
        Prev
      </button>
      <button disabled={index === 2} onClick={handleNext} data-testid="next">
        Next
      </button>
    </div>
  );
}

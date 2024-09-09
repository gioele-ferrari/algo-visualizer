import { useEffect, useState } from "react";
import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";
import { generateRandomArray } from "./utils/utils";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [array, setArray] = useState<number[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number[]>([]);

  useEffect(() => {
    setArray(generateRandomArray(10, 10, 100, setHighlightedIndex));
  }, []);

  return (
    <div className="bg-gray-700">
      <Navbar array={array} setArray={setArray} setHighlightedIndex={setHighlightedIndex}/>
      <AlgorithmVisualizer array={array} setArray={setArray} highlightedIndex={highlightedIndex}/>
      <Footer/>
    </div>
  );
}
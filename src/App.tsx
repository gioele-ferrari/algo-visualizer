import { useEffect, useState } from "react";
import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";

export default function App() {
  const [array, setArray] = useState<number[]>([]);

  const generateRandomArray = (length: number, max: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * max));
  };

  useEffect(() => {
    setArray(generateRandomArray(10, 100));
  }, []);

  return (
    <AlgorithmVisualizer array={array} algorithm={"bubbleSort"} />
  );
}
import { useEffect, useState } from "react";
import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";

export default function App() {
  const [array, setArray] = useState<number[]>([]);

  const generateRandomArray = (length: number, min: number, max: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min) + min));
  };

  useEffect(() => {
    setArray(generateRandomArray(10, 10, 100));
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center">
      <AlgorithmVisualizer array={array} algorithm={"bubbleSort"}/>
    </div>
  );
}
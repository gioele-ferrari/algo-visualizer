import { useEffect, useState } from "react";
import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";
import { generateRandomArray } from "./utils/utils";

export default function App() {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(generateRandomArray(10, 10, 100));
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AlgorithmVisualizer array={array} algorithm={"bubbleSort"} />
    </div>
  );
}
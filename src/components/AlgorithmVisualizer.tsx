import React, { useEffect } from "react"
import { SortingArray } from "./SortingArray";

interface AlgorithmVisualizerInterface {
  array: number[],
  setArray: (array: number[]) => void,
  highlightedIndex: number[]
};

export const AlgorithmVisualizer: React.FC<AlgorithmVisualizerInterface> = ({ array, setArray, highlightedIndex }) => {
  // Quando l'array cambia dobbiamo fare il set dei nuovi valori
  useEffect(() => {
    setArray(array);
  }, [array]);

  return ( <SortingArray array={array} highlightedIndex={highlightedIndex} /> );
}
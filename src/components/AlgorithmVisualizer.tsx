import React, { useState } from "react"
import { bubbleSort } from "../algorithms/bubbleSort";
import { SortingArray } from "./SortingArray";

interface AlgorithmVisualizerInterface {
    array: number[],
    algorithm: string
};

export const AlgorithmVisualizer: React.FC<AlgorithmVisualizerInterface> = ({ array, algorithm }) => {
    // Impostiamo le variabili passando i valori atttraverso l'interfaccia
    const [sortedArray, setSortedArray] = useState<number[]>(array);
    const [highlightedIndex, setHighlightedIndex] = useState<number[]>([]);

    const runAlgorithm = () => {
        switch (algorithm) {
          case 'bubbleSort':
            bubbleSort(sortedArray, setSortedArray);
            break;
          default:
            break;
        }
    };

    return (
        <div>
            <SortingArray array={sortedArray} highlightedIndex={highlightedIndex} />
            <button onClick={runAlgorithm}>Start Sorting</button>
      </div>
      );
}
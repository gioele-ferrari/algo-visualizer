import React, { useEffect, useState } from "react"
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

    // Dobbiamo inserire array
    useEffect(() => {
      setSortedArray(array);
    }, [array])

    const runAlgorithm = () => {
        switch (algorithm) {
          case 'bubbleSort':
            bubbleSort(sortedArray, setSortedArray, setHighlightedIndex);
            break;
          default:
            break;
        }
    };

    const shuffleArray = () => {
      const tempArray = [...sortedArray];
      for (let i = tempArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]]; 
      }
      setHighlightedIndex([]);
      setSortedArray([...tempArray]);
    }

    return (
        <div>
            <SortingArray array={sortedArray} highlightedIndex={highlightedIndex} />
            <button onClick={runAlgorithm} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Start Sorting</button>
            <button onClick={shuffleArray} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Shuffle Array</button>
      </div>
      );
}
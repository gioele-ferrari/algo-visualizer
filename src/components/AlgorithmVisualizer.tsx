import React, { useEffect, useState } from "react"
import { SortingArray } from "./SortingArray";
import { runAlgorithm, shuffleArray } from "../utils/utils";

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
    }, [array]);

    return (
      <div>
        <SortingArray array={sortedArray} highlightedIndex={highlightedIndex} />
        <div className="flex justify-center mt-5 gap-5">
          <button 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => runAlgorithm(algorithm, sortedArray, setSortedArray, setHighlightedIndex)}>
            Start
          </button>
          <button 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => shuffleArray(sortedArray, setSortedArray, setHighlightedIndex)}>
            Shuffle
          </button>
        </div>
      </div>
    );
}
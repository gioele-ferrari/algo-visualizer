import React, { useEffect, useState } from "react"
import { SortingArray } from "./SortingArray";
import { Navbar } from "./Navbar";

interface AlgorithmVisualizerInterface {
    array: number[],
    algorithm: string
};

export const AlgorithmVisualizer: React.FC<AlgorithmVisualizerInterface> = ({ array }) => {
    // Impostiamo le variabili passando i valori atttraverso l'interfaccia
    const [sortedArray, setSortedArray] = useState<number[]>(array);
    const [highlightedIndex, setHighlightedIndex] = useState<number[]>([]);

    // Dobbiamo inserire array
    useEffect(() => {
      setSortedArray(array);
    }, [array]);

    return (
      <div>
        <Navbar sortedArray={array} setSortedArray={setSortedArray} setHighlightedIndex={setHighlightedIndex}/>
        <SortingArray array={sortedArray} highlightedIndex={highlightedIndex} />
      </div>
    );
}
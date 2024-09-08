import React, { useEffect, useState } from "react"
import { SortingArray } from "./SortingArray";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface AlgorithmVisualizerInterface {
  array: number[];
  setArray: (array: number[]) => void;
}

export const AlgorithmVisualizer: React.FC<AlgorithmVisualizerInterface> = ({ array, setArray }) => {
    const [highlightedIndex, setHighlightedIndex] = useState<number[]>([]);

    // Dobbiamo inserire array
    useEffect(() => {
      setArray(array);
    }, [array]);

    return (
      <div>
        <Navbar array={array} setArray={setArray} setHighlightedIndex={setHighlightedIndex}/>
        <SortingArray array={array} highlightedIndex={highlightedIndex} />
        <Footer/>
      </div>
    );
}
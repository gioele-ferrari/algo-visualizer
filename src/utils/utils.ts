import { bubbleSort } from "../algorithms/bubbleSort";

export const runAlgorithm = (
    algorithm: string,
    sortedArray: number[],
    setSortedArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void
) => {
    switch (algorithm) {
      case 'bubbleSort':
        bubbleSort(sortedArray, setSortedArray, setHighlightedIndex);
        break;
      default:
        break;
    }
};

export const shuffleArray = (
    sortedArray: number[],
    setSortedArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void
) => {
  const tempArray = [...sortedArray];
  for (let i = tempArray.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]]; 
  }
  setHighlightedIndex([]);
  setSortedArray([...tempArray]);
}

export const generateRandomArray = (
    length: number,
    min: number,
    max: number
) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min) + min));
};

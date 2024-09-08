import { bubbleSort } from "../algorithms/bubbleSort";

export const runAlgorithm = async (
  algorithm: string,
  array: number[],
  setArray: (array: number[]) => void,
  setHighlightedIndex: (array: number[]) => void
) => {
  switch (algorithm) {
    case 'bubbleSort':
      await bubbleSort(array, setArray, setHighlightedIndex);
      break;
    default:
      break;
  }
};

export const shuffleArray = (
    array: number[],
    setArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void
) => {
  const tempArray = [...array];
  for (let i = tempArray.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]]; 
  }
  setHighlightedIndex([]);
  setArray([...tempArray]);
}

export const generateRandomArray = (
    length: number,
    min: number,
    max: number
) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min) + min));
};

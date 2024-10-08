import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";

export const runAlgorithm = async (
  algorithm: string,
  array: number[],
  setArray: (array: number[]) => void,
  setHighlightedIndex: (array: number[]) => void,
  selectedSpeed: number
) => {
  switch (algorithm) {
    case 'bubbleSort':
      await bubbleSort(array, setArray, setHighlightedIndex, selectedSpeed);
      break;
    case 'selectionSort':
      await selectionSort(array, setArray, setHighlightedIndex, selectedSpeed);
      break;  
    case 'insertionSort':
      await insertionSort(array, setArray, setHighlightedIndex, selectedSpeed);
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
    max: number,
    setHighlightedIndex: (array: number[]) => void
) => {
  setHighlightedIndex([]);
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min) + min));
};

export const playAudio = (audioFile: string) => {
  const audio = new Audio(audioFile);
  audio.play();
};
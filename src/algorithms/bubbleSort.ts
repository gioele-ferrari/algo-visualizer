import { playAudio } from "../utils/utils";

export const bubbleSort = async (
  array: number[], 
  setArray: (array: number[]) => void,
  setHighlightedIndex: (array: number[]) => void,
  selectedSpeed: number,
): Promise<number[]> => {
    const tempArray = [...array];
    const length = tempArray.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        setHighlightedIndex([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, selectedSpeed));

        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          setArray([...tempArray]);
          playAudio('src/assets/swap.wav');
          await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        }

        await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        setHighlightedIndex([]);
      }
    }

    playAudio('src/assets/finish.wav');
    setHighlightedIndex(Array.from({ length: length }, (_, i) => i));
  
    return tempArray;
};

export const bubbleSort = async (
  array: number[], 
  setArray: (array: number[]) => void,
  setHighlightedIndex: (array: number[]) => void,
  selectedSpeed: number,
): Promise<number[]> => {
    const tempArray = [...array];
    let len = tempArray.length;
  
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        setHighlightedIndex([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, selectedSpeed));

        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          setArray([...tempArray]);
          await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        }

        await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        setHighlightedIndex([]);
      }
    }

    setHighlightedIndex(Array.from({ length: len }, (_, i) => i));
  
    return tempArray;
};

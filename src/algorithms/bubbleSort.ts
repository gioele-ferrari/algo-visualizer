export const bubbleSort = async (
  array: number[], 
  setArray: (array: number[]) => void,
  setHighlightedIndex: (array: number[]) => void
): Promise<number[]> => {
    const tempArray = [...array];
    let len = tempArray.length;
  
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        setHighlightedIndex([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, 250));

        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          setArray([...tempArray]);
          await new Promise(resolve => setTimeout(resolve, 250));
        }

        await new Promise(resolve => setTimeout(resolve, 250));
        setHighlightedIndex([]);
      }
    }

    setHighlightedIndex(Array.from({ length: len }, (_, i) => i));
  
    return tempArray;
};

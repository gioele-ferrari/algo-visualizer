export const bubbleSort = async (array: number[], setSortedArray: (array: number[]) => void): Promise<number[]> => {
    const tempArray = [...array];
    let len = tempArray.length;
  
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          setSortedArray([...tempArray]);
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }
    }
  
    return tempArray;
  };
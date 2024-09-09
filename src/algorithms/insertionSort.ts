export const insertionSort = async (
    array: number[],
    setArray: (array: number[]) => void,
    setHighlightedIndex: (indices: number[]) => void,
    selectedSpeed: number
): Promise<number[]> => {
    const tempArray = [...array];
    const length = tempArray.length;

    for (let i = 1; i < tempArray.length; i++) {
        let current = tempArray[i];
        let j = i - 1;

        setHighlightedIndex([i]);
        await new Promise(resolve => setTimeout(resolve, selectedSpeed));

        while (j >= 0 && tempArray[j] > current) {
            setHighlightedIndex([j, j + 1]);
            await new Promise(resolve => setTimeout(resolve, selectedSpeed));

            tempArray[j + 1] = tempArray[j];
            j--;

            setArray([...tempArray]);
            await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        }

        tempArray[j + 1] = current;

        setArray([...tempArray]);
        setHighlightedIndex([j + 1]);
        await new Promise(resolve => setTimeout(resolve, selectedSpeed));

        setHighlightedIndex([]);
    }

    setHighlightedIndex(Array.from({ length: length }, (_, i) => i));

    return tempArray;
};

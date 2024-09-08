export const selectionSort = async (
    array: number[], 
    setArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void,
    selectedSpeed: number,
): Promise<number[]> => {
    const tempArray = [...array];
    const length = tempArray.length;

    for(let i = 0; i < length; i++) {
        let minIndex = i;
        setHighlightedIndex([i]);
        await new Promise(resolve => setTimeout(resolve, selectedSpeed));

        for(let j = i + 1; j < length; j++) {
            setHighlightedIndex([minIndex, j]);
            await new Promise(resolve => setTimeout(resolve, selectedSpeed));

            if(tempArray[j] < tempArray[minIndex]) {
                minIndex = j;
            }

            await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        }
        if(minIndex != i) {
            [tempArray[i], tempArray[minIndex]] = [tempArray[minIndex], tempArray[i]];
            setArray([...tempArray]);
            await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        }

        await new Promise(resolve => setTimeout(resolve, selectedSpeed));
        setHighlightedIndex([]);
    }

    setHighlightedIndex(Array.from({ length: length }, (_, i) => i));

    return tempArray;
}
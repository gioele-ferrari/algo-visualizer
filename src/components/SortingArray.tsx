import React from "react";

interface SortingArrayInterface {
    array: number[],
    highlightedIndex: number[];
}

export const SortingArray: React.FC<SortingArrayInterface> = ({ array, highlightedIndex }) => {
    return (
        <div>
            {array.map((value, index) => (
                <div key={index}>
                    {value}
                </div>   
            ))}
        </div>
    )
}
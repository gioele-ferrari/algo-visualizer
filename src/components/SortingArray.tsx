import React from "react";

interface SortingArrayInterface {
    array: number[],
    highlightedIndex: number[];
}

export const SortingArray: React.FC<SortingArrayInterface> = ({ array, highlightedIndex }) => {
    return (
        <div className="flex space-x-2">
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{ width: '20px', height: `${value * 10}px` }}
                    className="bg-gray-500"
                >
                    {value}
                </div>
            ))}
        </div>
    )
}
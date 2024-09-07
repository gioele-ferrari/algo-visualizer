import React from "react";

interface SortingArrayInterface {
    array: number[],
    highlightedIndex: number[];
}

export const SortingArray: React.FC<SortingArrayInterface> = ({ array, highlightedIndex }) => {
    return (
        <div className="flex space-x-2 justify-center" style={{alignItems: "flex-end"}}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{ height: `${value * 5}px`, width: '30px' }}
                    className={`bg-gray-500 ${
                        highlightedIndex.includes(index) ? 'bg-red-500' : ''
                    }`}
                >
                    {value}
                </div>
            ))}
        </div>
    )
}
import React from "react";

interface SortingArrayInterface {
    array: number[],
    highlightedIndex: number[];
}

export const SortingArray: React.FC<SortingArrayInterface> = ({ array, highlightedIndex }) => {
    return (
        <div className="w-full h-screen flex justify-center items-center gap-3">
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{ height: `${value * 5}px`, width: "35px" }}
                    className={`flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${
                        highlightedIndex.includes(index) ? 'bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500' : ''}`
                    }
                >
                    {value}
                </div>
            ))}
        </div>
    )
}
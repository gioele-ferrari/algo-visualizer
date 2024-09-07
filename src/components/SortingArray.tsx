import React from "react";

interface SortingArrayInterface {
    array: number[],
    highlightedIndex: number[];
}

export const SortingArray: React.FC<SortingArrayInterface> = ({ array, highlightedIndex }) => {
    return (
        <div className="flex space-x-2 justify-center items-center h-[600px]">
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{ height: `${value * 5}px`, width: "30px" }}
                    className={`flex items-center justify-center bg-gray-500 text-white font-bold rounded-full transition-all duration-200 ${
                        highlightedIndex.includes(index) ? 'bg-red-500' : ''
                    }`}
                >
                    {value} {/* Visualizza il valore se necessario */}
                </div>
            ))}
        </div>
    )
}
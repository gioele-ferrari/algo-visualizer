import { generateRandomArray, runAlgorithm, shuffleArray } from "../utils/utils"
import { IoPlay } from "react-icons/io5";
import { FaShuffle } from "react-icons/fa6";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useState } from "react";

interface NavbarInterface {
    array: number[],
    setArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void
}

export const Navbar: React.FC<NavbarInterface> = ({ array, setArray, setHighlightedIndex }) => {

    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubbleSort");
    const [selectedSpeed, setSelectedSpeed] = useState<number>(250);

    const handleAlgorithmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAlgorithm(event.target.value);
        setHighlightedIndex([]);
    };

    const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpeed(Number(event.target.value));
        setHighlightedIndex([]);
    };

    return (
        <nav className="fixed top-0 w-full text-white py-4">
            <div className="container mx-auto flex justify-center items-center gap-4">
                <select 
                className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded"
                onChange={handleAlgorithmChange}
                value={selectedAlgorithm}
                >
                    <option selected>Seleziona un algoritmo</option>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                </select>
                <select 
                className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded"
                onChange={handleSpeedChange}
                value={selectedSpeed}
                >
                    <option selected>Seleziona una velocità</option>
                    <option value="100">Veloce (100ms)</option>
                    <option value="250">Medio (250ms)</option>
                    <option value="500">Lento (500ms)</option>
                </select>
                <button 
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => setArray(generateRandomArray(10, 10, 100))}>
                    Generate
                    <GiPerspectiveDiceSixFacesRandom />
                </button>
                <button 
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => shuffleArray(array, setArray, setHighlightedIndex)}>
                    Shuffle
                    <FaShuffle />
                </button>
                <button 
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => runAlgorithm(selectedAlgorithm, array, setArray, setHighlightedIndex, selectedSpeed)}>
                    Start
                    <IoPlay />
                </button>
            </div>
        </nav>
    )
}

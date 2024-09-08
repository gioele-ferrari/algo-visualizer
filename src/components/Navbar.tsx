import { runAlgorithm, shuffleArray } from "../utils/utils"
import { IoPlay } from "react-icons/io5";
import { FaShuffle } from "react-icons/fa6";

interface NavbarInterface {
    array: number[],
    setArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void
}

export const Navbar: React.FC<NavbarInterface> = ({ array, setArray, setHighlightedIndex }) => {
    return (
        <nav className="fixed top-0 w-full bg-gray-600 border-b-4 border-gray-700 text-white py-4">
            <div className="container mx-auto flex justify-center items-center gap-4">
                <button 
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => runAlgorithm("bubbleSort", array, setArray, setHighlightedIndex)}>
                    Start
                    <IoPlay />
                </button>
                <button 
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => shuffleArray(array, setArray, setHighlightedIndex)}>
                    Shuffle
                    <FaShuffle />
                </button>
            </div>
        </nav>
    )
}

import { runAlgorithm, shuffleArray } from "../utils/utils"

interface NavbarInterface {
    sortedArray: number[],
    setSortedArray: (array: number[]) => void,
    setHighlightedIndex: (array: number[]) => void
}

export const Navbar: React.FC<NavbarInterface> = ({ sortedArray, setSortedArray, setHighlightedIndex }) => {
    return (
        <nav className="fixed top-0 w-full bg-gray-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-center items-center gap-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => runAlgorithm("bubbleSort", sortedArray, setSortedArray, setHighlightedIndex)}>
                    Start
                </button>
                <button 
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => shuffleArray(sortedArray, setSortedArray, setHighlightedIndex)}>
                    Shuffle
                </button>
            </div>
        </nav>
    )
}

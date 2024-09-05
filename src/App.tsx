import { AlgorithmVisualizer } from "./components/AlgorithmVisualizer";

export default function App() {
  return (
    <AlgorithmVisualizer array={[2, 10, 4, 6, 3, 9]} algorithm={"bubbleSort"}></AlgorithmVisualizer>
  )
}
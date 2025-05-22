import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import Button from "./components/Button";
import Incrementor from "./components/Incrementor";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import WindowSize from "./components/WindowSize";

function App() {
  return (
    <>
      <main className="flex justify-center items-center w-full h-screen gap-16">
        <Incrementor />
        <ColorPicker />
        <TodoList />
        <WindowSize />
      </main>
    </>
  );
}

export default App;

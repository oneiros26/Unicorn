import Incrementor from "./components/Incrementor";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import WindowSize from "./components/WindowSize";
import Form from "./components/Form";

function App() {
  return (
    <main className="flex items-center w-max h-screen gap-80 overflow-x-scroll pl-[calc(50vw-80px)] pr-[50vw]">
      <h1 className="w-140 text-center -ml-50 text-6xl fixed top-25">
        Hold shift and scroll&#33;
      </h1>
      <Incrementor />
      <ColorPicker />
      <TodoList />
      <WindowSize />
      <Form />
    </main>
  );
}

export default App;

import "./App.css";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

function App() {
  return (
    <div className="screen min-w-screen h-screen p-10">
      <div className="main-screen border-2 border-black w-[100%] h-[100%] rounded-4xl flex flex-row p-5">
        <div className="left-pane h-[100%] w-[25%]">
          <LeftPane />
        </div>
        <div className="right-pane h-[100%] w-[75%]">
          <RightPane />
        </div>
      </div>
    </div>
  );
}

export default App;

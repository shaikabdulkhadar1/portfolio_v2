import "./App.css";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import Particles from "./components/background/Particles";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden p-20">
      <Particles
        className="absolute inset-0 z-0"
        particleColors={["#000000", "#000000"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="main-screen absolute inset-0 rounded-4xl flex flex-row p-5 z-10 backdrop-blur-xs  bg-opacity-30 shadow-lg">
        <div className="left-pane h-full w-1/4">
          <LeftPane />
        </div>
        <div className="right-pane h-full w-3/4">
          <RightPane />
        </div>
      </div>
    </div>
  );
}

export default App;

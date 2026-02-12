import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Index from "./Components/Content/Index.jsx";
import "./Configs/i18n.js";

function App() {
  return (
  <div className="main-container size-full relative overflow-hidden bg-gray-950">
      {/* 3D Background Container */}
      <div className="scene">
        <div className="cube-container">
          {/* Multiple floating cubes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="cube"
              style={{
                animationDelay: `${i * 0.5}s`,
                left: `${(i % 4) * 25 + 10}%`,
                top: `${Math.floor(i / 4) * 40 + 20}%`,
              }}
            >
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          ))}
        </div>
      </div>

      {/* content here */}
      <div className="relative z-10 size-full">
        <Header />
        <Index />
      </div>
    </div>
  );
}

export default App;

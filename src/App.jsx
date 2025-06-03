import "./App.css";
import "./assets/fonts/fonts.css";
import Home from "./Home";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <div className="lg:bg-white ">
        <div className="container mx-auto p-3.5 lg:p-0">
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto p-3.5 lg:p-0">
        <Home />
      </div>
    </>
  );
}

export default App;
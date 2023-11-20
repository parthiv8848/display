import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>

        <Routes>
          <Route path="/show" element={<Display></Display>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

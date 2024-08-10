import './App.css';
import Home from './views/Home';
import Produto from './views/Produto';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

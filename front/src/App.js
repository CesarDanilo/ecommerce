import './App.css';
import Home from './views/Home';
import Produto from './views/Produto';
import Carrinho from './views/Carrinho';
import Admin from './views/Admin';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

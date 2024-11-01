import './App.css';
import Home from './views/Home';
import Produto from './views/Produto';
import Carrinho from './views/Carrinho';
import SingIn from 'views/Auth/singIn';
import CreateAccount from 'views/Auth/CreateAccount';
import Checkout from 'views/Checkout';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<SingIn />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path='/checkout' element={<Checkout />} />
          {/* <Route path="*" element={<Navigate to="/admin/index" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

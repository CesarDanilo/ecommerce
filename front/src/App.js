import './App.css';
import Home from './views/Home';
import Produto from './views/Produto';
import Carrinho from './views/Carrinho';

import AdminLayout from "./Admin/src/layouts/Admin";
import AuthLayout from "./Admin/src/layouts/Auth";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./Admin/src/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Admin/src/assets/scss/argon-dashboard-react.scss";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

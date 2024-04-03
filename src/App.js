import './App.css';
import './css/TopNavigation.css'
import './css/BottomInfo.css'
import './css/Vege.css'
import './css/Company.css'
import './css/System.css'
import './css/Product.css'
import './css/Notice.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Vege from './pages/Vege';
import System from './pages/System';
import Product from './pages/Product';
import Company from './pages/Company';
import Notice from './pages/Notice';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/vege" element={<Vege />} />
          <Route path="/system" element={<System />} />
          <Route path="/product" element={<Product />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

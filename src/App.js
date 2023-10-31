import './App.css';
import './css/TopNavigation.css'
import './css/BottomInfo.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

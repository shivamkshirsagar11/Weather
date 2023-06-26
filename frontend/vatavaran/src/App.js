import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ----------------------------------------------------------------
import HomePage from './UI/Home/HomePage';
// ----------------------------------------------------------------
function App() {
  // require('dotenv').config();
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;

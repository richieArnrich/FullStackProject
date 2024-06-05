import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import ViewData from "./pages/ViewData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/viewdata" element={<ViewData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

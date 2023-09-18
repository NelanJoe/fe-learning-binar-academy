import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comparison from "./pages/Comparison";
import Error from "./pages/Error";
import Header from "./components/Header";
import ModuleStylesPage from "./pages/ModuleStylesPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/module-styles" element={<ModuleStylesPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

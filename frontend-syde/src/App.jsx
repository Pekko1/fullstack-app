import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

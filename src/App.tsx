import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Games } from "./pages/games/games";
import { Pokedex } from "./pages/pokedex/pokedex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { App } from "./App";
import { Test } from "./test";
import Comsumption from "./test"; // default export なら波かっこ不要
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/comsumption" element={<Comsumption />} /> {/* ← 追加！ */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

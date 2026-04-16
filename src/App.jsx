import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { PageSelectSet } from "./components/PageSelectSet";
import { PageViewSet } from "./components/PageViewSet";
import { PageCreateSet } from "./components/PageCreateSet";
import { FormCreateSet } from "./components/FormCreateSet";
import { FormCreateCard } from "./components/FormCreateCard";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageSelectSet />} />
        <Route path="/set/:id" element={<PageViewSet />} />
        <Route path="/admin" element={<PageCreateSet />}>
          <Route path="createset" element={<FormCreateSet />} />
          <Route path="createcard" element={<FormCreateCard />} />
        </Route>
        <Route path="*" element={<h2>404 — Страница не найдена</h2>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
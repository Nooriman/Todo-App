import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Auth = lazy(() => import("./pages/Auth/Auth"));
const Main = lazy(() => import("./pages/Main/Main"));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

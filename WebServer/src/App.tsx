import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Auth = lazy(() => import("./container/Auth"));
const Main = lazy(() => import("./container/Main"));
const LeftDrawer = lazy(() => import("./components/Main/LeftDrawer"));

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

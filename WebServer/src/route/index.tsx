import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../pages/App/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />

      <Route path="/*" element={<>Error</>} />
    </Route>
  )
);

export default router;

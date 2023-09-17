import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./components/Guest";
import HostDetail from "./components/HostDetail";
import AccoDetail from "./components/AccoDetail";
import Payment from "./components/Payment";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/profile", element: <Guest /> },
  { path: "/hosts/:id", element: <HostDetail /> },
  { path: "/accomodations/:id", element: <AccoDetail /> },
  { path: "/reserve", element: <Payment /> },
]);

root.render(<RouterProvider router={routes} />);

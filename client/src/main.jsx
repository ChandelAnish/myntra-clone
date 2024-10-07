import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Beauty from "./pages/Beauty.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import HomeAndLive from "./pages/HomeAndLive.jsx";
import Studio from "./pages/Studio.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/beauty", element: <Beauty /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/kids", element: <Kids /> },
      { path: "/homeandlive", element: <HomeAndLive /> },
      { path: "/studio", element: <Studio /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

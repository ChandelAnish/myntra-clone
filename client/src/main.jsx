import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './Routes/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Bag from './Routes/Bag.jsx'
import Home from './Routes/Home.jsx'
import { Provider } from 'react-redux'
import myntraStore from './store/index.js'
import Login from './components/Login.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <Home />},
    { path: "/bag", element: <Bag /> },
    {path: "/login", element: <Login />}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

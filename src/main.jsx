import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { RouterProvider } from 'react-router-dom';

//paginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/new",
        element: <NewPost />,
      },


    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cocktail,
  Error,
  AppLayout,
  Landing,
  Newsletter,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: '/cocktail', element: <Cocktail /> },
      { path: '/newsletter', element: <Newsletter /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

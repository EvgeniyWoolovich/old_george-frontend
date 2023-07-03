import './App.css';
import { Header } from './components/header/header';
import { HomePage } from './components/homePage/homePage';
import { Footer } from './components/footer/footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Paths } from './shared/lib/paths';
import { Menu } from './components/menu/menu';
import { Cart } from './components/cart/cart';
import { store } from './app/store';
import { Provider } from 'react-redux';


const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: Paths.Home, element: <HomePage /> },
      { path: Paths.Menu, element: <Menu /> },
      { path: Paths.Cart, element: <Cart /> },
      { path: '*', element: <div>404 Not Found</div> }
    ],
  },
]);

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;

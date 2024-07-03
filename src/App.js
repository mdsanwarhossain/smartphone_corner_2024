import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Products from "./components/Products";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ListUser from "./components/ListUser";
import ProductList from "./components/ProductList";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
      {
        path: '/about',
        element:<About></About>,
      },
      {
        path: '/product',
        element:<Products></Products>,
      },
      {
        path: '/productlist',
        element:<ProductList></ProductList>,
      },
      ///productlist
      {
        path: '/products',
        element:<Product></Product>,
      },
      {
        path: '/signin',
        element:<SignIn></SignIn>,
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>,
      },
      {
        path: '/userlist',
        element:<ListUser></ListUser>,
      },
      // {
      //   path: '/userlist',
      //   element:<ListUser></ListUser>,
      // },
      {
      path: '/product/:id',
      element: <ProductDetails></ProductDetails>,
      }]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}



// function App() {
 
//   return (
//     <>
//       <Navbar></Navbar>
//       <About></About>
//       <Products></Products>
//       <Footer></Footer>
//     </>
//   );
// }

export default App;

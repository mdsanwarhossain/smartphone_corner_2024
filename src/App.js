import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      // children: [
        
      //   {
      //     path: '/',
      //     element: <About></About>
      //   },
      //   {
      //     path: '/products',
      //     element: <Products></Products>
      //   }
      // ]
    },
    {
      path: '/about',
      element:<About></About>,
    },
    {
      path: '/product',
      element:<Products></Products>,
    },
    {
    path: '/product/:id',
    element: <ProductDetails></ProductDetails>,
    },
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

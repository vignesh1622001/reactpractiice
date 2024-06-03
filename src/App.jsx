import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookMyShow from "./Component/BookMyshow";
import ProductsComp from "./Component/ProductsComp";
import Detailscomp from "./Component/FunctionComp.jsx/DetailsComp";
import InsetImage from "./Component/FunctionComp.jsx/InsetImage";
import Detailform from "./Component/Detailform";
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleFun from "./Component/FunctionComp.jsx/LifeCycleFun";
import HookForms from "./Component/HookForms";
import GroceryList from "./Component/FunctionComp.jsx/GroceryList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <a className="ms3">
          <Link to="/Grocery-List">GroceryLis</Link>
        </a>

        <a className="ms3">
          <Link to="/Details-comp">Detailscomp</Link>
        </a>

        <a className="ms3">
          <Link to="/BookMyShow"> BookMyShow</Link>
        </a>
      </div>

      {/* <h1></h1>
   <Detailscomp/> */}
      {/* <InsetImage/> */}
      {/* <Detailscomp/> */}
      {/* <ProductsComp/>   */}
      {/* <BookMyShow/> */}
      {/* <LifeCycleFun/> */}

      {/* <HookForms/> */}
      <div>
        <Routes>
          <Route path="/Grocery-List" element={<GroceryList />} />
          <Route path="/Details-comp" element={<Detailscomp />} />
          <Route path="/BookMyShow" element={<BookMyShow />} />

          {/* <GroceryList />
          <Detailscomp />
          <BookMyShow /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

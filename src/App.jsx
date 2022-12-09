import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { flattenObj } from "./utils/flattenObject";
import {
  fetchAsyncAllJokes,
  fetchAsyncCategories,
} from "./features/category-slice";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import CategoryView from "./routes/category/category.component";
import SearchView from "./routes/category/search.component";
import "./App.css";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
    const updateSW = registerSW({
      onNeedRefresh() {
        Toastify({
          text: `<h4 style='display: inline'>An update is available!</h4>
                 <br><br>
                 <a class='do-sw-update'>Click to update and reload</a>  `,
          escapeMarkup: false,
          gravity: "bottom",
          onClick() {
            updateSW(true);
          }
        }).showToast();
      }
    });
}

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncAllJokes());
    dispatch(fetchAsyncCategories());
  }, []);

  const jokes = useSelector((state) => state.selectedCategory.jokes);
  const categories = useSelector((state) => state.selectedCategory.categories);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
       <Route path="/category" element={<CategoryView/>}/>
        <Route path="/search" element={<SearchView/>}/> 
      </Route>
    </Routes>
  );
}

export default App;

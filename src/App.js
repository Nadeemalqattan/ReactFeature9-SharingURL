// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import { Route, Switch } from "react-router";
import ProductForm from "./components/ProductForm";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const fetchProducts = () => {
    console.log("Let's fetch some cookies");
  };

  fetchProducts();

  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route path={["/products/new", "/products/:productSlug/edit"]}>
          <ProductForm />
        </Route>
        <Route path="/Products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

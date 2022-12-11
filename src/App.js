import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import User from "./pages/User"
import Contact from "./pages/Contact"
import Care from "./pages/Care"
import Career from "./pages/Career"
import Store from "./pages/Store"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"

import Fashion from "./pages/Fashion"
import Electronic from "./pages/Electronic"
import Home from "./pages/Home"
import Gift from "./pages/Gift"
import Music from "./pages/Music"
import Health from "./pages/Health"
import Pet from "./pages/Pet"
import Baby from "./pages/Baby"
import Grocery from "./pages/Grocery"
import Book from "./pages/Book"

function App() {

  const { productItems } = Data
  const { fashionItems } = Data
  const { eleItems } = Data
  const { homeItems } = Data
  const { giftItems } = Data
  const { musicItems } = Data
  const { healthItems } = Data
  const { petItems } = Data
  const { babyItems } = Data
  const { groItems } = Data
  const { bookItems } = Data

  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {

      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/Fashion' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Electronic' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Home' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Gift' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Music' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Health' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Pet' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Baby' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Grocery' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Book' exact>
            <Fashion productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>

          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Switch>
          <Route path='/User' exact component={User} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Care' exact component={Care} />
          <Route path='/Career' exact component={Career} />
          <Route path='/Privacy' exact component={Privacy} />
          <Route path='/Store' exact component={Store} />
          <Route path='/Terms' exact component={Terms} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

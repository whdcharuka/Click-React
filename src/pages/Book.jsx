import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals1 from "../components/flashDeals/FlashDeals1"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"

const Pages = ({ bookItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals1 productItems={bookItems} addToCart={addToCart} />
      {/* <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} /> */}
    </>
  )
}

export default Pages



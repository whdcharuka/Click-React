import React from "react"
import FlashCard1 from "./FlashCard1"
import "./style.css"

const FlashDeals = ({ bookItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard1 productItems={bookItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals

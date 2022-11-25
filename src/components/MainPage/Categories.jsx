import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/dress.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/smartphone.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/car.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/house.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/giftbox.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/guitar.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cosmetics.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/toys.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/essential-oil.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/education.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories

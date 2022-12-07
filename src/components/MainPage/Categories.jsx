import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/dress.png",
      cateName: "Fashion",
      path:"fashion",
    },
    {
      cateImg: "./images/category/smartphone.png",
      cateName: "Electronic",
      path:"ele",
    },
    {
      cateImg: "./images/category/car.png",
      cateName: "Cars",
      path:"car",
    },
    {
      cateImg: "./images/category/house.png",
      cateName: "Home & Garden",
      path:"home",
    },
    {
      cateImg: "./images/category/giftbox.png",
      cateName: "Gifts",
      path:"gift",
    },
    {
      cateImg: "./images/category/guitar.png",
      cateName: "Music",
      path:"music",
    },
    {
      cateImg: "./images/category/cosmetics.png",
      cateName: "Health & Beauty",
      path:"health",
    },
    {
      cateImg: "./images/category/cat.png",
      cateName: "Pets",
      path:"pet",
    },
    {
      cateImg: "./images/category/toys.png",
      cateName: "Baby Toys",
      path:"baby",
    },
    {
      cateImg: "./images/category/essential-oil.png",
      cateName: "Groceries",
      path:"gro",
    },
    {
      cateImg: "./images/category/education.png",
      cateName: "Books",
      path:"book",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <Link to={value.path}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories

import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/dress.png",
      cateName: "Fashion",
      path:"Fashion",
    },
    {
      cateImg: "./images/category/smartphone.png",
      cateName: "Electronic",
      path:"Electronic",
    },
    {
      cateImg: "./images/category/house.png",
      cateName: "Home & Garden",
      path:"Home",
    },
    {
      cateImg: "./images/category/giftbox.png",
      cateName: "Gifts",
      path:"Gift",
    },
    {
      cateImg: "./images/category/guitar.png",
      cateName: "Music",
      path:"Music",
    },
    {
      cateImg: "./images/category/cosmetics.png",
      cateName: "Health & Beauty",
      path:"Health",
    },
    {
      cateImg: "./images/category/cat.png",
      cateName: "Pets",
      path:"Pet",
    },
    {
      cateImg: "./images/category/toys.png",
      cateName: "Baby Toys",
      path:"Baby",
    },
    {
      cateImg: "./images/category/essential-oil.png",
      cateName: "Groceries",
      path:"Grocery",
    },
    {
      cateImg: "./images/category/education.png",
      cateName: "Books",
      path:"Book",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <Link className='abc' to={value.path}>
            <div className='box f_flex' key={index}>
              
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
              
              
            </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories





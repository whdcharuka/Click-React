import React from "react"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa fa-user" aria-hidden="true"></i>,
      title: "Your Account",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid3'>
          {data.map((val, index) => {
            return (
              <div className='product1' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
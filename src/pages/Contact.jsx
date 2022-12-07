import React from "react"
import "../common/header/Header.css"
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
      <section className='wrapper background'>
          <div className="mklp">
            <img src='images/contactus.png' />
          </div>
        
          <div className='wcontainer grid7'>
            <div className='product' >
              <form id='form' className='flex flex-col'>   
                <h4>Call or email us</h4>
                  <span className='emailus'>Please get in touch with us and we will get back to you as soon as possible.</span>
                  <span className='emailus'>
                    9am - 6pm on weekdays<br></br>
                    8am - 5pm on weekends<br></br><br></br>
                    symphony@gmail.com<br></br><br></br>
                    +94 2256 5987<br></br><br></br>
                    SLT mobitel, Lotus rd, <br></br>Colombo 1.
                  </span>
              </form>
            </div>
          </div>

        <div className="cont">
          <div className="col-1">
            <h4>Fill the details and submit</h4>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    
                  <input type="text" className='d' {...register("fname")} placeholder='First Name' />
                    
                  <input type="text" className='d' {...register("lname")} placeholder='Last Name' />               
                    
                  <input type="text" className='d' {...register("email")} placeholder='Email' />
                    
                  <input type="text" className='d' {...register("number")} placeholder='Phone Number' />
                      {errors.mobile?.type === "required" && "Mobile Number is required"}
                      {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

                  <input type="text" className='e' {...register("message")} placeholder='Message' />
                      
                  <button className='btn'>Submit</button>
                </form>
              </div>
          </div>          
      </section>
     </section>  
  )
}
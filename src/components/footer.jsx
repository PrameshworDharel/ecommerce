import React from 'react'
const footer = () => {
  return (
  <>
  <div className='flex gap-20'>
    <div className='p-28'>
      <p className='text-fourth'><small>400 University Drive Suite 200 Coral<br></br>
         Gables <br></br>
        FL 33134 USA</small></p>
    </div>
    <div>
<ul className='mt-16 grid gap-4'>
  <li className='text-fourth'>Links</li>
  <div className='font-bold grid gap-4'>
  <li ><small>Home</small></li>
  <li ><small>Shop</small></li>
  <li ><small>About</small></li>
  <li ><small>Contact</small></li>   
  </div>
</ul>
 </div>

    <div>
      <ul className='mt-16 grid gap-4'>
        <li className='text-fourth'>Help</li>
        <div className='font-bold grid gap-4'>
        <li><small>Payment Options</small></li>
        <li><small>Returns</small></li>
        <li><small>Privacy Policies</small></li>
        </div>
  
      </ul>
    </div>
    <div>
      <ul className='mt-16 grid gap-4'>
        <li className='text-fourth'>Newsletter</li>
        <div className='flex gap-7 '>
        <li className='text-fourth border-b-2'> <small>Enter Your Email Address</small></li>
        <li className='font-semibold border-b-2'><small>SUBSCRIBE</small></li>
        </div>
      </ul>
    </div>
  </div>
  <div className='ml-32 mr-28 mb-6'>
    <hr className='text-fourth '></hr>
   <h1 className='mt-9 font-semibold'>2022 Meubel House. All rights reverved</h1> 
  </div>

  </>

  )
  }

export default footer
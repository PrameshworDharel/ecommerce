import React from 'react'
 import Sofa3 from '../../assets/photos/sofa3.png'
const Sofa =() => {
return(
    <>
<div className='flex bg-fifth gap-16'>
    <div>
        <img src={Sofa3} alt='sofa' className='[90%]'></img>
    </div>
    <div class="pt-64">
        <h5 className='font-semibold ml-9'>New Arrivals</h5>
        <h1 className=' text-3xl font-bold mb-5'>Asgaard sofa</h1>
        <button class="font-semibold py-2 px-6 border">Order Now
</button>
    </div>
</div>
</>
)

};
export default Sofa
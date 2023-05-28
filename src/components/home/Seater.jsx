import React from "react";
import Seater1 from '../../assets/photos/seater1.png'
const Seater = () => {
    return (
    <>
    <div class=" bg-secondary flex justify-between">
            <div>
            <h1 class="font-bold text-3xl mt-40 ml-96">Rocket single <br></br>
            seater</h1>
            <p class="text-xl ml-96 mt-5">Shop Now</p>
            <hr class=" h-0.5 w-[16%] ml-96 mt-1"></hr>
            </div>
            <img  src={Seater1} alt="seater" class="h-[450px] w-[500px] justify-end mr-10"></img>
        </div> 
    </>
    )
};
export default Seater
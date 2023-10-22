import React from 'react'
import { useState } from 'react';
import Shoe from './Shoe'
function Card() {
  const [first, setFirst] = useState(true);
  const toggle = () => {
    setFirst(!first);
  }
  return (<>
    <div className={`${first ? "bg-black" : "bg-white"} body`}>
      <div className={`${first ? " bg-black card-div-white" : "bg-white card-div-black"}  p-2 card-div rounded-md`}>
        <header className=' p-1'>
        <button onClick={toggle} type="button"
            className="theam-btn text-white bg-gray-800 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2
         dark:bg-gray-800 dark:border-gray-700">{first ? "Dark" : "Light"}</button>
          <h1 className={`${first ? " text-yellow-200" : "text-green-400"} text-5xl text-center  m-1`}>Shoe</h1>
        </header>
        <footer className='flex justify-around'>
          <Shoe cssClass={`${first ? "text-white card-div-white" : "text-black shoe-div-black"}`}
            img="https://rukminim2.flixcart.com/image/832/832/kr6oeq80/shoe/n/y/y/8-kc043-red-k-footlance-red-original-imag5ffhyh5ufguh.jpeg?q=70"
            name="K- FOOTLANCE" size="" price="499" rating="4.3" />
          <Shoe cssClass={`${first ? "text-white card-div-white" : "text-black shoe-div-black"}`}
            img="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/e/u/-original-imaghvb4u7wmbrbg.jpeg?q=70"
            name="Hustle V2 Running Shoe(Black))" size="" price="1,198" rating="4.4" />
          <Shoe cssClass={`${first ? "text-white card-div-white" : "text-black shoe-div-black"}`}
            img="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/3/g/3/11-if7289-11-adidas-ftwwht-silvmt-brired-original-imagst4hvgzh24zs.jpeg?q=70"
            name="CRAZY 1 Basketball Shoe(White)" size="" price="7,678" rating="4" />
        </footer>
      </div>
    </div>
  </>
  )
}

export default Card
import React, { useState } from 'react'
//import farmer from '../public/assets/farmers.svg'
import cancelBtn from '../public/assets/cancel.svg'
import Frame from '../public/assets/Frame.jpg'

const Popup = () => {

  const [visible, setVisible] = useState(true);

  return (
    <div className={` ${ visible ? "flex flex-col self-center justify-center items-center" : "hidden" } rounded-xl bg-zinc-100 md:w-1/2 w-4/5 relative mx-auto md:mt-[8rem] mt-[6rem] `}>
        <button onClick={ () => setVisible(false) } > <img src={cancelBtn} className='w-[2rem] absolute right-2 top-2' alt="cancel" /> </button>
        <img src={Frame} alt="img" className='md:h-[18rem] h-[10rem] md:mx-11 my-5' />
        <a href="/" className='mb-10 py-2 px-3 bg-green-400 rounded-lg hover:bg-green-300'>Contact us</a>
    </div>
  )
}

export default Popup
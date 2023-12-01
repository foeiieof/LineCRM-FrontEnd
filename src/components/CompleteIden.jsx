import React from 'react'
import idencomp from '../assets/icons/iden-complete.svg'

function CompleteIden() {
  return (
   <section className='w-full h-screen flex flex-col justify-center items-center'>
    <div className='flex flex-col justify-center items-center'>
        <div>
            <img src={idencomp} alt='complete' />
        </div>
        <div>
            <span className='Font-Title text-[--Color-WF-100]'>ยืนยันตัวตนสำเร็จ</span>
        </div>
    </div>
   </section>
  )
}

export default CompleteIden
import React from 'react'
import idencard from '../assets/icons/iden-card.svg'
import idenphone from '../assets/icons/iden-phone.svg'
import CloseTap from './CloseTap'

function IdenPage() {
    return (
        <section>
        <CloseTap />
            <div className='w-full h-[815px] mt-10 mb-8'>
                <form className='w-full h-full flex flex-col justify-between gap-4' action=''>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex  flex-col gap-4'>
                                <img src={idencard} alt="Card" className='w-[52px]' />
                                <span className='Font-Title text-[--Color-Main-Base]'>เลขบัตรประชาชน</span>
                            </div>
                            <input type="text" placeholder='X-XXXX-XXXX-XXXXX' className='w-[320px] h-[55px] rounded-[15px]  border-2 bg-[--Color-WF-Sec] hover:border-[--Color-Main-Base] p-4' />
                        </div>

                        <div className='flex flex-col gap-4 mt-7'>
                            <div className='gap-4'>
                                <img src={idenphone} alt="Phone" className='w-[40px]' />
                                <span className='Font-Title text-[--Color-Main-Base]'>หมายเลขโทรศัพท์</span>
                            </div>
                            <input type="text" placeholder='XXX-XXX-XXXX' className='w-[320px] h-[55px] rounded-[15px]  border-2 bg-[--Color-WF-Sec] hover:border-[--Color-Main-Base] p-4' />
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <input type="submit" value='ยืนยันตัวตน' className='w-[320px] h-[55px] rounded-[15px] bg-[--Color-Main-Base] text-[--Color-WF-Base] cursor-pointer ' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default IdenPage
import homephone from '../assets/icons/home-phone.svg'
import homeemails from '../assets/icons/home-emails.svg'
import profilecoins from '../assets/icons/profile-coins.svg'
import profilecards from '../assets/icons/profile-cards.svg'
import profilemarks from '../assets/icons/profile-marks.svg'
import profilecredits from '../assets/icons/profile-credits.svg'
import menucarts from '../assets/icons/menu-carts.svg'
import menureserves from '../assets/icons/menu-reserves.svg'
import menugetservices from '../assets/icons/menu-getservices.svg'
import menubooking from '../assets/icons/menu-booking.svg'
import React from 'react'

function Home() {
    return (
        <section className='mt-10 mx-[20px]'>
            <div className='Profiles'>
                <div className='w-full flex flex-row justify-between'>
                    <div className='w-[180px] h-[180px] flex justify-center items-center rounded-full border-4 border-[--Color-Main-40] '>
                        <img src="" alt="Picture-profiles" />
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='w-full flex flex-col'>
                            <span id='welcome' className='flex justify-center items-center Font-Title-M text-[--Color-WF-30]'>ยินดีต้อนรับคุณ</span>
                            <span id='nicknames' className='flex justify-center items-center Font-Title-L text-[--Color-Main-Base]'>ชัย</span>
                            <span id='names' className='flex justify-center items-center Font-Title-M text-[--Color-gradient-1]'>สุรชัย ลุนสำโรง</span>
                        </div>

                        <div className='w-full flex flex-row justify-start gap-2'>
                            <img src={homephone} alt="phone" />
                            <span id='phonenumber' className='flex justify-center items-center Font-Text-S text-[--Color-WF-10]'>080-0000010</span>
                        </div>
                        <div className='w-full flex flex-row justify-start gap-2'>
                            <img src={homeemails} alt="emails" />
                            <span id='email' className='flex justify-center items-center Font-Text-S text-[--Color-WF-10]'>Surachai.kk@gmail.com</span>
                        </div>


                    </div>
                </div>
                <div id='Grad-BG' className='w-full h-[120px] flex flex-row justify-evenly items-center GradientBG rounded-[10px] mt-6'>
                    <div id='point-card' className='flex flex-col justify-center items-center gap-2'>
                        <div>
                            <img src={profilecoins} alt="coin-points" />
                        </div>
                        <div className='flex flex-col items-center text-[--Color-WF-Base] '>
                            <span>198</span>
                            <span>แต้ม</span>
                        </div>
                    </div>
                    <div id='card-card' className='flex flex-col justify-center items-center gap-2'>
                        <div>
                            <img src={profilecards} alt="card-points" />
                        </div >
                        <div className='flex flex-col items-center text-[--Color-WF-Base] '>
                            <span>2</span>
                            <span>การ์ด</span>
                        </div>
                    </div>
                    <div id='mark-card' className='flex flex-col justify-center items-center gap-2'>
                        <div>
                            <img src={profilemarks} alt="mark-points" />
                        </div>
                        <div className='flex flex-col items-center text-[--Color-WF-Base] '>
                            <span>1</span>
                            <span>นัดหมาย</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center bg-[--Color-BG-Second] rounded-[20px] mt-[3vh]'>
                <div className='w-[320px] h-[170px] flex flex-col items-center'>
                    <div className='abosolute translate-y-[4vh] -translate-x-[17vh] Font-Text-S text-[--Color-Main-10]'>WD0000569</div>
                    <img src={profilecredits} alt="credits" className='w-[320px] h-[170px]'/>
                    <div className='absolute translate-y-[18vh] -translate-x-[16.5vh] text-[--Color-WF-Base] Font-Text-S'>Total Balance</div>
                    <div className='absolute translate-y-[20.75vh] -translate-x-[16.25vh] text-[--Color-Main-Base] Font-Title-M'>5,000</div>
                </div>
            <div className='flex flex-wrap justify-center gap-[3vh] mt-6'>
                <div><img src={menucarts}/></div>
                <div><img src={menureserves}/></div>
                <div><img src={menugetservices} /></div>
                <div><img src={menubooking}/></div>
            </div>
            </div>
           
        </section>
    )
}

export default Home
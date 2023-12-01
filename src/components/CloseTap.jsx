import BackBT from '../assets/buttons/back.svg'
import React from 'react'

function CloseTap() {
    return (
        <div className="flex w-[390px] items-center gap-[10px] px-[16px] py-[10px] mt-[40px] relative " >
            <a className="inline-flex items-center gap-[1rem] relative cursor-pointer">
                <img className="relative flex-[0_0_auto]" alt="Image" src={BackBT} />
                <span className="relative w-fit font-normal text-Base text-[--Color-Main-Base]">
                    Back
                </span>
            </a>
        </div>
    )
}

export default CloseTap
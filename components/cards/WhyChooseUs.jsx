import React from "react";

function WhyChooseUs(){
    return (
        <div className="p-[16px] bg-gradient-to-br from-orange-100 to-gray-200 rounded border border-orange-100 rounded-[4px]">
            <div className="mb-[16px]">
                <div className="text-neutral-800 text-base font-semibold tracking-tight">Why choose us</div>
                <div className="text-zinc-600 text-xs font-normal tracking-tight">Let's get lost in a world of delectable food.</div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="w-72 h-11 justify-start items-center gap-3 inline-flex mb-[20px]">
                    <div className="w-[32px] h-[32px]">
                        <img src="./assests/icons/discount.png" alt="" srcset="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-black text-sm font-normal">Daily Discounts</div>
                        <div className="w-64 text-neutral-400 text-xs font-normal">keep up with your rings, workouts, awards, and trends.</div>
                    </div>
                </div>
                <div className="w-72 h-11 justify-start items-center gap-3 inline-flex mb-[20px]">
                    <div className="w-[32px] h-[32px]">
                        <img src="./assests/icons/tracking.png" alt="" srcset="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-black text-sm font-normal">Live Tracking</div>
                        <div className="w-64 text-neutral-400 text-xs font-normal">keep up with your rings, workouts, awards, and trends.</div>
                    </div>
                </div>
                <div className="w-72 h-11 justify-start items-center gap-3 inline-flex">
                    <div className="w-[32px] h-[32px]">
                        <img src="./assests/icons/clock.png" alt="" srcset="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-black text-sm font-normal">Quick Delivery</div>
                        <div className="w-64 text-neutral-400 text-xs font-normal">keep up with your rings, workouts, awards, and trends.</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WhyChooseUs;
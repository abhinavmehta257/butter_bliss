import react from "react";

function Footer(){
    return (
        <div className="w-full h-[58px] bg-white flex flex-row justify-around pt-[8px]">
            <div className="flex flex-col items-center cursor-pointer">
                <div className="">
                    <img src="./assests/icons/home_icon.svg" alt="" srcset="" />
                </div>
                <div className="">Home</div>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <div className="">
                    <img src="./assests/icons/recent_orders_icon.svg" alt="" srcset="" />
                </div>
                <div className="">Orders</div>
            </div>
            <div class="w-[64px] h-[64px] relative bg-red-600 rounded-[39px] border-2 border-orange-100 backdrop-blur-2xl mt-[-24px] cursor-pointer">
            <img src="./assests/icons/cart_icon.svg" alt="" srcset="" />
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <div className="">
                    <img src="./assests/icons/wishlist_icon.svg" alt="" srcset="" />
                </div>
                <div className="">Wishlist</div>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <div className="">
                    <img src="./assests/icons/user_section_icon.svg" alt="" srcset="" />
                </div>
                <div className="">Profile</div>
            </div>
        </div>
    )
}

export default Footer;
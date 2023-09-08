import react from "react";

function CategoryCard({title,img}){
    return (
        <div class="w-40 h-40 relative">
            <div class="w-40 h-40 left-0 top-0 absolute">
                <div class="w-40 h-40 left-0 top-0 absolute bg-black bg-opacity-50 rounded-lg">
                    <img className="w-full h-full" src={img} alt="" srcset="" />
                    <div class="w-40 h-40 left-0 top-0 absolute bg-black bg-opacity-50 rounded-lg"></div>
                </div>
                <div class="w-24 left-[31.33px] top-[66.25px] absolute text-center text-white text-base font-normal leading-normal">{title}</div>
            </div>
        </div>
    )
}

export default CategoryCard;
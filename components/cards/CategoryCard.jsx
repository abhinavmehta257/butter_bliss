import react from "react";

function CategoryCard({title,img}){
    return (
        <div class="w-[48.5%] md:w-[32%] aspect-square relative cursor-pointer bg-cover bg-no-repeat rounded-[8px]" style={{backgroundImage:`url('${img}')`}}>
            <div class="w-full h-full bg-black bg-opacity-50 rounded-[8px] flex flex-col justify-center text-white text-base font-normal leading-normal">
                <span className="text-center w-[60%] m-auto">{title}</span>
            </div>
        </div>
    )
}

export default CategoryCard;
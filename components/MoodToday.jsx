import react from "react";
import CategoryCard from "./cards/CategoryCard";

let categories = [
    {
        "title":"Fast Food",
        "img":"https://res.cloudinary.com/dxe8948vp/image/upload/v1694172375/butter_bliss/bg_brfyvj.png"
    },{
        "title":"Breakfast & Brunch",
        "img":"https://res.cloudinary.com/dxe8948vp/image/upload/v1694172375/butter_bliss/bg-1_sbdz1r.png"
    },{
        "title":"Mexican",
        "img":"https://res.cloudinary.com/dxe8948vp/image/upload/v1694172375/butter_bliss/bg-2_u9jkai.png"
    },{
        "title":"Bakery",
        "img":"https://res.cloudinary.com/dxe8948vp/image/upload/v1694172375/butter_bliss/bg-3_la383x.png"
    },{
        "title":"Deserts",
        "img":"https://res.cloudinary.com/dxe8948vp/image/upload/v1694172375/butter_bliss/bg-4_gibq0d.png"
    },{
        "title":"Burgers",
        "img":"https://res.cloudinary.com/dxe8948vp/image/upload/v1694172375/butter_bliss/bg-5_vuhzj4.png"
    }
]


function MoodToday(){
    return (
        <div>
           <div class="text-neutral-800 text-base font-semibold tracking-tight mb-[16px] mt-[16px]">What's your mood today?</div>
           <div className="flex flex-wrap gap-[8px]">
            {
                categories.map((category)=>(
                    <CategoryCard title={category.title} img={category.img}/>
                ))
            }
           </div>
        </div>
    )
}

export default MoodToday;
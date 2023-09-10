import React from "react";
import FoodCard from "./cards/FoodCard";

let popularDishes = [
    {
        "name":"Aloo Chaat",
        "cost":"3.88",
        "img":"https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
    },{
        "name":"Aloo Chaat",
        "cost":"3.88",
        "img":"https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
    },{
        "name":"Aloo Chaat",
        "cost":"3.88",
        "img":"https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
    },{
        "name":"Aloo Chaat",
        "cost":"3.88",
        "img":"https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
    },{
        "name":"Aloo Chaat",
        "cost":"3.88",
        "img":"https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
    },{
        "name":"Aloo Chaat",
        "cost":"3.88",
        "img":"https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
    }
]

function PopularDished() {
    return (
        <div>
            <div className="flex flex-row justify-between mb-[16px]">
                <div>
                    <div class="text-neutral-800 text-base font-semibold tracking-tight">Popular Dishes</div>
                    <div class="text-zinc-600 text-xs font-normal tracking-tight">Dishes which are popular near you</div>
                </div>
                <div class="text-red-600 text-xs font-medium tracking-tight underline">View All</div>
            </div>
            <div className="flex flex-row w-full overflow-hidden overflow-scroll snap-x no-scrollbar .thin-scroll"> 
                {
                    popularDishes.map((dish, ind) =>(<div className="mr-[8px] snap-center"><FoodCard name={dish.name} cost={dish.cost} img={dish.img} key={ind}/></div>))
                }
            </div>
        </div>
    )
}
export default PopularDished;
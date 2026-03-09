import Appendandseedata from "./appendseedata";
import { useState } from "react";

export default function Fetchedlist(){
    const [show,setshow]=useState(false);
    return(
        <div className="p-4 md:p-10 w-full flex justify-center relative">
            <div className="w-full max-w-4xl" >
            <button className="w-full hover:cursor-pointer hover:bg-[#222e22] h-auto px-4 py-3 md:px-6 md:py-4 border-2 border-indigo-500 rounded-2xl text-white bg-[#202420] flex flex-col gap-2 md:gap-3 transition-all" onClick={()=>setshow(true)}>
                <h1 className="text-2xl md:text-4xl font-bold text-start">This is something</h1>
                <p className="truncate leading-relaxed text-lg md:text-2xl w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium sapiente ea error eligendi magnam maxime iste facere? Expedita rem ratione tenetur. Pariatur inventore, reiciendis sed dicta ex velit quisquam, nobis sequi quis iure dolores error suscipit consectetur doloribus odit cum. Dolorem perferendis quam aperiam omnis minus rem fugit praesentium!</p>
            </button>
            
            </div>
            {show && (
                <div className="fixed inset-0 z-[9999] bg-[#d0d1b4] flex items-center justify-center p-2 md:p-6">
                    <Appendandseedata onClose={()=>setshow(false)} />

                </div>
            )
            }
        </div>
    );
}
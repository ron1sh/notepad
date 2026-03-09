import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newbutton(){
    const navigates=useNavigate();
    return(<>
            <button className="flex flex-row items-center justify-center gap-2 bg-[#3e6649] border-slate-700 border-2 rounded-2xl text-xl md:text-3xl lg:text-4xl text-white hover:bg-[#2b524b] transition-all px-4 py-2 md:px-6 md:py-3 shadow-xl hover:cursor-pointer" onClick={()=>navigates("/create")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/></svg>
                <span className="font-semibold">Create</span>  
            </button>

         
        </>
    );
}
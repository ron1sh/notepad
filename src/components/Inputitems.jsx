import { useRef, useState } from "react";
import { Navigate,NavLink,useNavigate} from "react-router-dom";
export default function Inputitems(){
    const [title,settitle]=useState("");
    const [texts,settexts]=useState("");
    const titletextAreaRef = useRef(null);
    const contenttextAreaRef=useRef(null);
    const navigate=useNavigate();
    const hideScrollbar = "scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";


  const handleChange = (e) => {
    if(e.target.id==="titletext"){
    settitle(e.target.value);
    titletextAreaRef.current.style.height = "auto";
    titletextAreaRef.current.style.height = titletextAreaRef.current.scrollHeight + "px";
    }else{
        settexts(e.target.value);
        contenttextAreaRef.current.style.height = "auto";
        contenttextAreaRef.current.style.height = contenttextAreaRef.current.scrollHeight + "px";  
    }
  };
    return(
        <div className="flex items-center justify-center min-h-screen w-screen]">
            <div className={`rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col justify-center p-3 min-w-[75vw] max-w-[75vw] min-h-[80vh] max-h-[80vh]  gap-4 overflow-scroll px-12 ${hideScrollbar}`}>
                <textarea name="" id="titletext" ref={titletextAreaRef} value={title} onChange={handleChange} placeholder="Title......." className={`resize-none outline-none border-none bg-transparent shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] font-bold text-3xl pt-2  ${hideScrollbar}`}></textarea>
                <textarea name="" id="contenttext" ref={contenttextAreaRef} value={texts} onChange={handleChange} placeholder="Content...." className={`resize-none outline-none border-none bg-transparent flex flex-1 text-2xl  ${hideScrollbar}`}></textarea>
                <div className="flex justify-end hover:cursor-pointer">
                    <button className="border text-2xl font-bold border-black px-8 py-2 hover:cursor-pointer hover:bg-[#5e8c6b] rounded-2xl" onClick={() =>{ 
                        console.log(title);
                        console.log(texts);
                        navigate("/",{replace:true})
                        }}>Post</button>
                </div>
            </div>
        </div>
            
    );
}
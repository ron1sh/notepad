import { useState } from "react";

export default function Appendandseedata({onClose,objid,objtitle,objcontent,refresh}){

    const [title,setTitle] = useState(objtitle);
    const [content,setContent] = useState(objcontent);
    const hideScrollbar = "scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

    const updatedata=async ()=>{
        try{
            await fetch("/api/updatenote",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id: objid,
                    title: title,
                    content: content
                })
            });
            await refresh();
            onClose();
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className={`bg-white rounded-2xl shadow-2xl flex flex-col p-3 w-[95vw] md:w-[80vw] lg:w-[75vw] max-w-6xl h-[90vh] md:h-[80vh]gap-4 overflow-scroll ${hideScrollbar}`}>
                
                <textarea name="" value={title} onChange={(e)=>setContent(e.target.value)} className={`resize-none outline-none border-none bg-transparent shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] font-bold text-2xl md:text-4xl pt-2 ${hideScrollbar}`}></textarea>

                <textarea name="" value={content} onChange={(e)=>setContent(e.target.value)} className={`resize-none outline-none border-none bg-transparent flex-1 text-lg md:text-2xl mt-4 ${hideScrollbar}`}></textarea>
                <div className="flex justify-between" >
                    <div className="flex justify-end items-center mb-1 hover:cursor-pointer">
                                    <button onClick={onClose} className="text-3xl md:text-5xl hover:text-red-500 cursor-pointer p-2">&times;</button>
                                </div>
                    <div className="flex justify-end hover:cursor-pointer pt-4">
                        <button className="border text-xl md:text-2xl font-bold border-black px-6 py-2 md:px-10 md:py-3 cursor-pointer hover:bg-[#5e8c6b] hover:text-white transition-all rounded-2x" onClick={updatedata}>Update</button>
                    </div>
                </div>

            </div>
    );
}

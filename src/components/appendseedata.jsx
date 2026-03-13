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
    const deletedata=async()=>{
        try{
            await fetch("/api/deletedata",{
                method:"DELETE",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({id:objid})
            });
            await refresh();
           onClose();
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className={`bg-[#403b3b] rounded-2xl shadow-2xl flex flex-col p-3 w-[95vw] md:w-[80vw] lg:w-[75vw] max-w-6xl h-[90vh] md:h-[80vh]gap-4 overflow-scroll ${hideScrollbar} text-white`}>
                
                <textarea name="" value={title} onChange={(e)=>setTitle(e.target.value)} className={`resize-none outline-none border-none bg-transparent shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] font-bold text-2xl md:text-4xl pt-2 ${hideScrollbar}`}></textarea>

                <textarea name="" value={content} onChange={(e)=>setContent(e.target.value)} className={`resize-none outline-none border-none bg-transparent flex-1 text-lg md:text-2xl mt-4 ${hideScrollbar}`}></textarea>
                <div className="flex justify-between" >
                    <div className="flex justify-end items-center mb-1 hover:cursor-pointer">
                        <button onClick={onClose} className="text-3xl md:text-5xl hover:scale-[1.1] hover:text-red-500 cursor-pointer p-2">&times;</button>
                        </div>
                     <div className="flex justify-end items-center mb-1 hover:cursor-pointer">
                        <button className=" text-3xl md:text-5xl hover:scale-[1.1] hover:text-red-500 cursor-pointer p-2" onClick={deletedata}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></button>
                    </div>
                    <div className="flex justify-end hover:cursor-pointer pt-4">
                        <button className=" text-xl md:text-2xl font-bold  border-indigo-500 border-2 px-6 py-2 md:px-10 md:py-3 cursor-pointer hover:bg-[#5e8c6b] hover:text-white transition-all rounded-2xl hover:scale-[1.05]" onClick={updatedata}>Update</button>
                    </div>
                </div>

            </div>
    );
}

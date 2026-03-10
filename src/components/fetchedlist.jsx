import Appendandseedata from "./appendseedata";
import { useState,useEffect } from "react";

export default function Fetchedlist(){
    const [data,setdata]=useState(null);
    const [show,setshow]=useState(false);
    const [objid,setobjid]=useState("");
    const [objtitle,setobjtitle]=useState("");
    const [objcontent,setobjcontent]=useState("");
    
    const fetchdata=async ()=>{
        try{
            const response=await fetch("/api/");
            const result = await response.json();
            console.log(result);
            setdata(result);
            
        }catch(err){
            console.log(err);
        }

    }
    useEffect(() => {
      fetchdata();
    
      
    }, [])
    
    
    return(
        <div className="p-4 md:p-10 w-full flex flex-col items-center relative gap-4">
            {data && data.map(info=>{return(
                <div className="w-full max-w-4xl" key={info._id}>
                    <button className="w-full hover:cursor-pointer hover:bg-[#222e22] h-auto px-4 py-3 md:px-6 md:py-4 border-2 border-indigo-500 rounded-2xl text-white bg-[#202420] flex flex-col gap-2 md:gap-3 transition-all" onClick={()=>{setobjid(info._id); setobjtitle(info.title); setobjcontent(info.content); setshow(true);}}>

                        <h1 className="text-2xl md:text-4xl font-bold text-start">{info.title}</h1>
                        <p className="truncate leading-relaxed text-lg md:text-2xl w-full text-start"> {info.content}</p>
                        
                    </button>
                
                </div>)
            })  
            }

            {show && (
                <div className="fixed inset-0 z-[9999] bg-[#d0d1b4] flex items-center justify-center p-2 md:p-6">
                    <Appendandseedata onClose={()=>setshow(false)} objtitle={objtitle} objcontent={objcontent} objid={objid} refresh={fetchdata} />

                </div>
            )
            }
        </div>
    );
}
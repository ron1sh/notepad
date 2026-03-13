import Appendandseedata from "./appendseedata";
import { useState,useEffect } from "react";

export default function Fetchedlist(){
    const [data,setdata]=useState([]);
    const [show,setshow]=useState(false);
    const [objid,setobjid]=useState("");
    const [objtitle,setobjtitle]=useState("");
    const [objcontent,setobjcontent]=useState("");
    const [notLoggedIn,setnotLoggedIn] = useState(false);
    const [hasNotes,sethasNotes] = useState(false);
    
    const fetchdata=async ()=>{
        try{
            const response=await fetch("/api/", { credentials: "include" });
            if(response.status===401){ 
                setnotLoggedIn(true);
                sethasNotes(false);
                return
            }
            setnotLoggedIn(false);
            const result = await response.json();
            setdata(result);
            if(result.length > 0){
                sethasNotes(true);
            }else{
                sethasNotes(false);
            }
        }catch(err){}

    }
    useEffect(() => {
      fetchdata();
    }, [])
    if(notLoggedIn){ return(
            <div className="flex items-center justify-center mt-40 w-full flex-1 flex justify-center items-center ">
                <div className="bg-[#202420] border-2 border-indigo-500 rounded-2xl px-10 py-8 text-center text-white shadow-xl">
                    <h2 className="text-3xl font-bold mb-3">
                        Login Required
                    </h2>
                    <p className="text-gray-400 text-lg">
                        You must login to view your notes
                    </p>
                </div>
            </div>
        )
    }
    if(!notLoggedIn && !hasNotes){
        return(
            <div className="flex flex-col items-center justify-center w-full mt-20 text-gray-400">

                <h2 className="text-2xl md:text-3xl font-semibold">
                    No notes yet
                </h2>

                <p className="text-lg mt-2">
                    Create your first note to get started.
                </p>

            </div>
        );
    }

    return(
        <div className="p-4 md:p-10 w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  relative gap-3">
            
            {!notLoggedIn && hasNotes && data.map(info=>{return(
                <div className=" flex-1 hover:scale-[1.05]" key={info._id}>
                    <button className="w-full hover:cursor-pointer hover:bg-[#222e22] h-auto px-3 py-3 md:px-6 md:py-4 border-2 border-indigo-500 rounded-2xl text-white bg-[#202420] flex flex-col gap-1 md:gap-3 transition-all" onClick={()=>{setobjid(info._id); setobjtitle(info.title); setobjcontent(info.content); setshow(true);}}>

                        <h1 className="text-xl md:text-3xl font-bold text-start truncate pb-1">{info.title}</h1>
                        <p className="truncate leading-normal text-lg md:text-xl w-full text-start"> {info.content}</p>
                        
                    </button>
                
                </div>)
            })  
            }

            {show && (
                <div className="fixed inset-0 z-[9999] bg-[#141414] flex items-center justify-center p-2 md:p-6">
                    <Appendandseedata onClose={()=>setshow(false)} objtitle={objtitle} objcontent={objcontent} objid={objid} refresh={fetchdata} />

                </div>
            )
            }
        </div>
    );
}
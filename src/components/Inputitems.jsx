import { useRef, useState } from "react";
import { Navigate,NavLink,useNavigate} from "react-router-dom";
import Protectedauthrouter from "./protectedauthroute";
export default function Inputitems(){
    const [title,settitle]=useState("");
    const [texts,settexts]=useState("");
    const titletextAreaRef = useRef(null);
    const contenttextAreaRef=useRef(null);
    const [isSaved, setIsSaved] = useState(false);
    const [isempty,setisempty]=useState(false);
    const navigate=useNavigate();
    const [checkserver,setcheckserver]=useState(false);
    const hideScrollbar = "scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
    const postingdata= async ()=>{
        if(!texts && !title){
            setisempty(true);
            setTimeout(()=>setisempty(false),2000)
            return;
        }
        try{
        const response= await fetch("/api/newnote",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                content:texts
            })
        });
        if (response.status===200){
            console.log("successfully saved!");
            setIsSaved(true);
            setisempty(false);
            setcheckserver(false);
            setTimeout(() => {
                    setIsSaved(false);
                    navigate("/", { replace: true });
                }, 1200);
        } else {
            setcheckserver(true);
            setTimeout(() => {
                    setcheckserver(false);
                    navigate("/", { replace: true });
                }, 1200);

            console.error("Failed to save note");
        }
    } catch(err){
        console.log(err);

    }
    }

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
        <Protectedauthrouter loggedin={true}>
        <div className="flex items-center justify-center min-h-screen w-screen relative text-white">
            {isSaved && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl font-bold animate-bounce">
                    ✅ Note saved successfully!
                </div>
            )}
            {isempty && 
                <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl font-bold animate-bounce">
                    Empty data cannot be saved
                </div>}
            {checkserver && 
                <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl font-bold animate-bounce">
                    Server is not responsing at the moment. you will be redirected to "Home"!
                </div>}
        
            <div className={`rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col justify-center p-3 min-w-[75vw] max-w-[75vw] min-h-[80vh] max-h-[80vh]  gap-4 overflow-scroll px-12 ${hideScrollbar} bg-[#403b3b]` }>
                <textarea name="title" id="titletext" ref={titletextAreaRef} value={title} onChange={handleChange} placeholder="Title......." className={`resize-none outline-none border-none bg-transparent shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] font-bold text-3xl pt-2  ${hideScrollbar}`}></textarea>
                <textarea name="content" id="contenttext" ref={contenttextAreaRef} value={texts} onChange={handleChange} placeholder="Content...." className={`resize-none outline-none border-none bg-transparent flex flex-1 text-2xl  ${hideScrollbar} `}></textarea>
                <div className="flex justify-between items-center">
                    <div className="flex justify-end items-center mb-1 hover:cursor-pointer">
                        <button onClick={()=>navigate("/",{replace:true})} className="text-3xl md:text-5xl hover:text-red-500 cursor-pointer p-2 hover:scale-[1.1]">&times;</button>
                    </div>
                    <div className="flex justify-end hover:cursor-pointer">
                        <button className="text-2xl font-bold border-indigo-500 border-2 px-8 py-2 hover:cursor-pointer hover:bg-[#5e8c6b] rounded-2xl hover:scale-[1.05]" onClick={postingdata}>Post</button>
                    </div>
                </div>
            </div>
        </div>
        </Protectedauthrouter>
            
    );
}
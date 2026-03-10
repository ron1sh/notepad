import reactimg from "../assets/nature.jpg"
import { useNavigate } from "react-router";
export default function Profilebutton(){
    const navigate=useNavigate();
    return(
        <div className="w-[100%] flex justify-end ">
            <button className="cursor-pointer rounded-full h-10 w-10 overflow-hidden hover:border-2 hover:border-white" onClick={()=>navigate("/profile",{replace:true})}> 
                <img src={reactimg} alt="" className="rounded-full object-cover h-full w-full" />
            </button>
        </div>
    );
}
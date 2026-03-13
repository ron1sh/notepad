import reactimg from "../assets/nature.jpg"
import { useNavigate } from "react-router-dom";
export default function Profilebutton(){
    const navigate=useNavigate();
    return(
        <div className="w-[100%] flex justify-end ">
            <button className="cursor-pointer rounded-2xl h-12 w-25 overflow-hidden hover:border-2 hover:border-white border-2 border-indigo-500 text-white text-3xl font-bold hover:scale-[1.02]" onClick={()=>navigate("/profile")}> 
                User
            </button>
        </div>
    );
}
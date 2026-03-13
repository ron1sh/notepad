import Fetchedlist from "./fetchedlist";
import Searchbar from "./Searchbar ";
import Newbutton from "./Newbutton";
import Profilebutton from "./profilebutton";
export default function Finaltemplate(){
    return(
        
        <div className=" flex flex-col relative min-h-[100%]  min-w-[100%] scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 py-5">
            <Profilebutton />

            <div className="w-full  flex justify-center pt-2 px-5">
                <Searchbar />
            </div>

            
            <div className="w-[100%] flex flex-1 overflow-auto scrollbar-hide">
                <Fetchedlist />
            </div>

            
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
                <Newbutton />
            </div>
        </div>
        
    );
}
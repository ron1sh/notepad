import Fetchedlist from "./fetchedlist";
import Searchbar from "./Searchbar ";
import Newbutton from "./Newbutton";
export default function Finaltemplate(){
    return(
        
        <div className=" flex flex-col realtive min-h-dvh scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <div className="w-full flex justify-center pt-10 px-20">
                <Searchbar />
            </div>

            
            <div className="w-full flex-1 flex  justify-center overflow-auto scrollbar-hide">
                <Fetchedlist />
            </div>

            
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
                <Newbutton />
            </div>
        </div>
        
    );
}
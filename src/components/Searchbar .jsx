function Onsearch(){

}

export default function Searchbar(){
    return(
        <div className="border-slate-700 border-2 flex rounded-full w-full sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[30vw] sm:min-w-[55vw] md:min-w-[35vw] lg:min-w-[25vw]  px-4 py-1 text-lg md:text-xl bg-white shadow-sm transition-all focus-within:shadow-md focus-within:border-amber-600">
            <input type="text" className="outline-none border-none py-2 min-w-0 min-h-4 flex-1" />
            <button className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg></button>

        </div>
    );
}
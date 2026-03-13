import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
export default function Profile(){
    const navigate=useNavigate();
    const [loggedin, setLoggedIn] = useState(null);

    useEffect(() => {
        let isMounted = true; // 1. Flag to prevent updates on unmounted components

        const checkAuth = async () => {
            try {
                const response = await fetch("/api/profile", { credentials: "include" });
                
                // 2. Check if response is actually okay
                if (!response.ok) throw new Error("Not authenticated");

                const result = await response.json();

                if (isMounted) {
                    if (result.loggedIn) {
                        setLoggedIn(true);
                    } else {
                        navigate("/login", { replace: true });
                    }
                }
            } catch (err) {
                if (isMounted) navigate("/login", { replace: true });
            }
        };

        checkAuth();

        return () => { isMounted = false; }; 
    }, [navigate]);
    const handleLogout = async () => {
        try {
            const response = await fetch("/api/logout", { 
                method: "POST", 
                credentials: "include" 
            });
            
            if (response.ok) {
                // Ensure state is updated before navigating
                setLoggedIn(false);
                navigate("/login", { replace: true });
            }
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    if (loggedin === null) return <div>Loading...</div>;
    
    return (
        <div className="p-4 flex justify-center items-center w-[100vw] h-[100vh] flex-col">
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to your Profile</h1>
            <button onClick={handleLogout}className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 transition flex justify-center items-center gap-3 text-2xl text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/><path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/></svg>
                Logout
            </button>
            <button className="text-white text-2xl cursor-pointer hover:scale-[1.03] hover:text-indigo-500 hover:underline mt-2"onClick={()=>navigate("/")}>Home</button>
        </div>
    );
    
}
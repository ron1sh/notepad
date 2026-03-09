import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-9xl font-bold text-amber-600">404</h1>
            <p className="text-2xl font-semibold mt-4 text-gray-800">Oops! This page doesn't exist.</p>
            <p className="text-gray-500 mt-2 mb-8">The link might be broken or the page has been moved.</p>
            
            <button 
                onClick={() => navigate("/",{replace:true})}
                className="px-6 py-3 bg-amber-600 text-white rounded-xl shadow-lg hover:bg-amber-700 transition-all cursor-pointer font-bold"
            >
                Take Me Home
            </button>
        </div>
    );
}
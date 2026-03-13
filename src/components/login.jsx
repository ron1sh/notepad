import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Protectedauthrouter from "./protectedauthroute";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [emailerr,setemailerr]=useState("");
    const [passerr,setpasserr]=useState("");
    const navigate = useNavigate();
    const [loginstatus,setloginstatus]=useState(false);

    const logininfochecker=async (e)=>{
        e.preventDefault();
        setloginstatus(false);
        setemailerr("");
        setpasserr("");
        if(email.trim()==="" && password.trim()===""){
            setemailerr("Email is required.");
            setpasserr("password is required.");
            return;
        }
        if(email.trim()===""){
            setemailerr("Email is required.");
            return;
        }
        if(!email.includes("@") || email.startsWith("@") || email.endsWith("@")){
            setemailerr("invalid email format!");
            return;
        }
        if(password.trim()===""){
            setpasserr("password is required.");
            return;
        }
        
        if(!/\d/.test(password)){
            setpasserr("password must include a number");
            return;
        }
        if (!/[a-z]/.test(password)) {
         setpasserr("Password must include a lowercase letter.");
         return;
        }
        if (!/[A-Z]/.test(password)) {
        setpasserr("Password must include an uppercase letter.");
        return;
        }
        if (!/[^a-zA-Z0-9]/.test(password)) {
            setpasserr("Password must include a special character");
            return;
        }
        if (/[\[\]{}()<>\\/|]/.test(password)) {
            setpasserr("Brackets and slashes are not allowed in the password.");
            return;
        }
        if (password.length < 8) {
            setpasserr("Password must be at least 8 characters long.");
            return;
        }



        try{
            const response=await fetch("/api/login",{
                method:"POST",
                credentials: "include", 
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            })

            if(response.ok){
                setloginstatus(true);
                setTimeout(() => {
                    navigate("/", { replace: true });
                }, 500);
            }else {
                const data=await response.json();
                setpasserr(data.message||"Login failed.");
                setloginstatus(false);
            }
        }catch(err){
            setpasserr("Sorry something went wrong. Please try again.");
            setloginstatus(false);
        }

    }

    return (
        <Protectedauthrouter loggedin={false}>
        <div className="min-h-screen w-screen flex justify-center items-center relative ">
            {loginstatus &&
            <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl font-bold animate-bounce">
                    Succesfully logged in              
                      </div>
                      }
        <form onSubmit={logininfochecker} noValidate className="w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-sm p-8 bg-white rounded-3xl shadow-2xl flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-center text-indigo-700">Welcome Back</h2>
            <p className="text-center text-gray-500">Login to your account</p>

            <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
            <input
                type="email"
                id="email" value={email} onChange={(e) => {setemail(e.target.value); setemailerr("");setpasserr("")}}
                placeholder="you@example.com"
                className="border border-gray-300 outline-none rounded-full px-4 py-3 w-full focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 transition"
            />
            </div>
            <p className="min-h-[1.25rem] text-red-500 text-sm">{emailerr}</p>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-gray-700 font-semibold">Password</label>
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 focus-within:ring-1 focus-within:ring-indigo-300 focus-within:border-indigo-500 transition">
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password" value={password} onChange={(e) =>{setpassword(e.target.value); setpasserr("");setemailerr("")}}
                    placeholder="********"
                    className="outline-none w-full"
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-3 text-gray-500 hover:text-indigo-600 transition cursor-pointer"
                    >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>
            <p className="min-h-[1.25rem] text-red-500 text-sm">{passerr}</p>

        
            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 rounded-full w-full hover:bg-indigo-700 transition shadow-md cursor-pointer" >
            Login
            </button>
            <button type="button"  className="text-center text-gray-500" onClick={()=>navigate("/signup")} >
            Don't have an account?
                <span className="text-indigo-600 font-semibold hover:underline cursor-pointer">
                Signup
                </span>
            </button>
        </form>
        </div>
        </Protectedauthrouter>
    );
    }
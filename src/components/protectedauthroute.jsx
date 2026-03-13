import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Protectedauthrouter({children,loggedin=true}){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/profile", { credentials: "include" });
        const data = await res.json();

        if (loggedin && !data.loggedIn) {
          navigate("/", { replace: true }); 
        } else if(!loggedin && data.loggedIn) {
            navigate("/", { replace: true }); 
        }
        else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate])
  if (loading) return <div>Loading...</div>;
    return children;
}
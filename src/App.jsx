import {useNavigate,createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Finaltemplate from "./components/finaltemplate";
import Inputitems from "./components/Inputitems";
import NotFound from "./components/NotFound";

function Layout(){
  return(
    <div className="m-h-screen max-w-screen flex flex-col items-center  scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Outlet />
    </div>
    
  );
}

export default function App(){
  const router=createBrowserRouter([{
    path:"/",
    element:<Layout />,
    children:[
      {index:true,element:<Finaltemplate />},
      {path:"create",element:<Inputitems />},
      { path: "*", element: <NotFound /> }
    ]
  }])
  return(
   <>
   <RouterProvider router={router}/>
   </>
  );
}
import './App.css';
import AppLayout from './component/AppLayout';

import {RouterProvider, createBrowserRouter} from "react-router-dom"
import LoginPage from './component/LoginPage';
import CreatePage from './component/createPage';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>,
  },
  {
    path:"/home",
    element:<AppLayout/>,
  },

  {
    path:"/signup",
    element:<CreatePage/>,
  },
])

function App() {

  return (
    <div className='bg-[#f5f5f5]'>
      
       <RouterProvider router={appRouter}/>
   
    </div>
  );
}

export default App;

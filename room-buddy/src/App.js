import './App.css';
import Header from './Component/Header';
import Login from './Component/Login';
import Signup from './Component/Signup';
import {createBrowserRouter, Outlet} from "react-router-dom"


function App() {

  return (
    <>
      <div className="app">
      <Header/>
      <Outlet />
      </div>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"",
    element:<App />,
    children : [
        {
          path:"/",
          element: <Login/>
        },
        {
          path:"/signup",
          element: <Signup />
        },
    ]
  }
])

export default App;

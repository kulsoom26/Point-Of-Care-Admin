import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Doctors from "./pages/Doctors";
import Radiologists from "./pages/Radiologists";
import Patients from "./pages/Patients";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import "./styles/global.css";
import Profile from "./pages/AdminProfile";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import { useAuth } from './components/Authcontext';
const queryClient = new QueryClient();

function App() {
  const { isAuthenticated } = useAuth();
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
      
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/doctors",
          element: <Doctors />,
        },
        {
          path: "/radiologists",
          element: <Radiologists />,
        },
        {
          path: "/patients",
          element: <Patients />,
        },
        {
          path: "/appointments",
          element: <Appointments />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}
export default App;
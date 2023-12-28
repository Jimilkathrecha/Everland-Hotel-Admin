import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Login from './components/modals/Login';
import Loader1 from './components/preloaders/Loader';
import Home from './pages/Home';
import RoomDetails from './pages/rooms/RoomDetails';
import Rooms from './pages/rooms/Rooms';
import Sidebar from './components/sidebar/Sidebar';
import AddRoom from './pages/rooms/AddRoom';


function App() {

  const [loading, setLoading] = useState(true);
  const [loginmodalstate, setLoginmodalstate] = useState(false);
  const [registermodalstate, setRegistermodalstate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);

  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "/login") {
    return <Login />;
  }
  return (
    <>
      {loading ? <Loader1 /> :
        <div className='w-100 ease-in duration-700 flex gap-3'>
          <Sidebar />
          <Routes> 
            <Route path="/home" element={<Home />} />
            <Route path="/Rooms-List" element={<Rooms />} />
            <Route path="/Add-Rooms" element={<AddRoom />} />
            <Route path="/Room-Details" element={<RoomDetails />} />
          </Routes>
        </div>
      }
    </>
  );
}

export default App;

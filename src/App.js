import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import UserContext from "./Context/UserContext";
import useFindUser from "./Hooks/useFindUser";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Chat from "./Components/Chat";

import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  const [user, setUser, loading] = useFindUser();
  console.log('User: ', user);
  return (
    <UserContext.Provider value={{user, setUser, loading}}>
      <div className="App">
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path='/login' element={<Login />} />
              <Route path="/register" element={<Register/>} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path='/chat' element={<Chat />}/>
            </Route>
          </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;

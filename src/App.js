import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import SearchHeader from './components/SearchHeader';


function App() {
  return <>
    <SearchHeader />
    <Sidebar />
    <Outlet />
    
  </>
}

export default App;






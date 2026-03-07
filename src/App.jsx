import React from 'react';
import { useState, } from 'react';
import NavBar  from './components/navBar.jsx';
import Footer  from './components/footer.jsx';
import AppRoutes  from './components/routes.jsx';
const App = () => {
  const [darkTheme,setdarkTheme]=useState(false);
  return (
    <div className={darkTheme ? 'dark' :''}>
      <div className='bg-gray-100 dark:bg-gray-900'>
         <NavBar darkTheme={darkTheme} setdarkTheme={setdarkTheme} />
         <AppRoutes />
         <Footer />
      </div>
    </div>
  );
}

export default App;


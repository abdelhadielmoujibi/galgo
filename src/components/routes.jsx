import React from 'react'
import ResultFunctin from './Result';
import SupportContact from './supportContact.jsx'

import { Routes, Route, Navigate } from 'react-router-dom'
const AppRoutes = () => {
  return (
    <div className='p-4 dark:text-[#E6EEF8]'>
      <Routes>
        <Route path='/' element={<Navigate to='/search'/>}/>
        <Route path='/search' element={<ResultFunctin />}/>
        <Route path='/images' element={<ResultFunctin />}/>
        <Route path='/news' element={<ResultFunctin />}/>
        <Route path='/videos' element={<ResultFunctin />}/>
        <Route path='/support' element={<SupportContact />}/>
      </Routes>
    </div>
  );
}

export default AppRoutes

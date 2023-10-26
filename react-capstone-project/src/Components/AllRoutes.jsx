import React from 'react'
// import Register from './Routes/Register/Register'
import Register from './Routes/Register/Register'
import SelectCategory from './Routes/SelectCategoryPage/SelectCategory'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Homepage from './Routes/Homepage/Homepage'
import Userprofile from './Routes/Homepage/Userprofile/Userprofile'
function AllRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/selectCategory' element={<SelectCategory/>}/>
        <Route path='/'element={<Homepage/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default AllRoutes
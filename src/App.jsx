import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllCars from './pages/AllCars'
import Home from './pages/Home'
import SellCar from './pages/SellCar'
import ViewCar from './pages/ViewCar'
import WishList from './pages/WishList'
import Admin from './pages/Admin'
import Missing from './pages/Missing'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import { DataProvider } from "./context/DataContext"
import ProtectedRoutes from './components/inventory/ProtectedRoutes'

function App() {
  return (
   <main className='bg-gray-200/50 min-h-screen flex flex-col'>
      <DataProvider>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Admin />} path='/admin' />
        </Route>
        <Route element={<Home />} path='/' />
        <Route element={<ViewCar />} exact path='/car/:id' />
        <Route element={<AllCars />} path='/cars' />
        <Route element={<SellCar />} path='/sell' />
        <Route element={<WishList />} path='/wish' />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='contact' />
        <Route element={<Missing />} path='*' />
      </Routes>
      <Footer />
    </DataProvider>
   </main>
  )
}

export default App

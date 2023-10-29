import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../views/Home/Inicio'
import { Nosotros } from '../views/AboutUs/Nosotros'
import { Acceso } from '../views/Access/Acceso'
import { Registro } from '../views/Register/Registro'
import { AvisoDePrivacidad } from '../views/Privaty/AvisoDePrivacidad'
import { Tienda } from '../views/Store/Tienda'
import { AppNavbar } from '../components/layout/navbar/AppNavbar'
import { AppFooter } from '../components/layout/footer/AppFooter'
import ScrollToTop from '../components/items/ScrollToTop'

export const Router = () => {
  return (
    <BrowserRouter>
        <AppNavbar/>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/sobre-nosotros' element={<Nosotros/>} />
            <Route path='/inicio-sesion' element={<Acceso/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/aviso-de-privacidad' element={<AvisoDePrivacidad/>} />

            <Route path="/tienda/" >
              <Route index element={<Tienda />} />
            </Route>

            <Route path='*' element={"error"} />
          </Routes>
        </ScrollToTop>
        <AppFooter/>
    </BrowserRouter>
  )
}
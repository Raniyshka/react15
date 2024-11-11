import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Catalog} from './pages/Catalog/Catalog'
import {Product} from './pages/Product/Product'
import {Users} from './pages/Users/Users'
import {Home} from './pages/Home/Home'
import {Cart} from './pages/Cart/Cart'
import {Route, Routes} from 'react-router-dom'
import { Header } from './components/Header/Header'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
    <Header cart={cart}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog cart={cart} addToCart={setCart}/>}/>
        <Route path='/catalog/:id' element={<Product/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
      </Routes>
    </>
  )
}

export default App

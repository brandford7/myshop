import React, { useState, useEffect, createContext, useContext } from "react"
import toast from "react-hot-toast"


const Context = createContext()

export const StateContext = ({ children }) => {
    
    const [showCart, setShowCart] = useState(false)
    
    const [cartItems, setCartItems] = useState()
    
    const [totalPrice,]
    
}
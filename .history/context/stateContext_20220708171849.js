import React, { useState, useEffect, createContext, useContext } from "react"
import toast from "react-hot-toast"


const Context = createContext()

export const tateContext = ({ children }) => {
    
    const [showCart,setShowCart] = useState(false)
    
}
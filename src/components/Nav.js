import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="flex justify-evenly mt-10 text-white font-bold text-xl  ">
            <Link to='/login' className="bg-blue-400 px-6 py-2 poppins hover:bg-blue-600 rounded-full">Login</Link>
            <Link to='/register' className="bg-blue-400 px-6 py-2 hover:bg-blue-600 rounded-full">Register</Link>
            
            
        </div>
    )
}

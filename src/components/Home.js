import React from 'react'
import { Redirect } from 'react-router-dom';
import Nav from './Nav'

export default function Home() {
    
    
        
     
    const login=  JSON.parse(localStorage.getItem('login'))
    if(login){
        return <Redirect to="/weather" />;
    }
    return (
        <div className=" flex items-center justify-center flex-col">
            <div className="mt-36 ">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl fredericka text-blue-500 font-black  tracking-wider text-center m-6 ">{`<`}{" "}Welcome to our Weather App{"  "}{" "}{`/>`}</h1>
            <Nav />
            </div>
            
        </div>
    )
}

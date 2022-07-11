import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
   return (
    <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/chat'}>Chat</Link>
    </header>
  
   )
}

export default HomePage; 
import React from "react";
import { useState } from "react";
import './App.css';


const ChatPage = () => {
   const [chats, setChats] = useState([
      {
         id: 1,
         name: 'Nick'
      },
      {
         id: 2,
         name: 'Helen'
      },
      {
         id: 3,
         name: 'Iren'
      },
      {
         id: 4,
         name: 'Alex'
      }
   ]);


   const deleteHandler = (id) => {
      const filteredItems = chats.filter((chat) => chat.id !== id);
      setChats(filteredItems);
   }
   const[name, setName] = useState('');

   const addHandler = () => {
      let random = Math.random();
      const obj = {
         id : random,
         name: name
      }
      setChats( prevState => [...prevState, obj]);
   }

   return (
   <div>
      <input value={name} type="text" onChange={(e)=> setName(e.target.value)}/>
      <button onClick={addHandler}>Add-Chat</button>
     { chats.map( ( chat ) =>(
         <div key={ chat.id } className="chat" >
            <h4>{chat.name}</h4>
            <button onClick={() => deleteHandler(chat.id)}>Del</button>
         </div>
      ))};
   </div>
   );
};

export default ChatPage;
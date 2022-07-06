import { useState } from "react";
/*import  {useState} from "react";*/

function Message({name}){
   /* const [name] = useState('Nick');*/
    return (
    <div className="message">
        {name}
    </div>
    )
}
export default Message;

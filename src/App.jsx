import React, {useState, useEffect, useRef} from 'react';
import './App.scss';



function App() {
   const [ messagesList , setMessagesList] = useState([ ]);
   const [text, setText] = useState('');
   const [author, setAuthor] = useState('');

    useEffect(() => {
       setTimeout(() =>  (
          botAnswer(messagesList)
          ),1000)
    }, [messagesList])

   const hundleSubmit= (e) => {
      e.preventDefault();
      setMessagesList( prevState => [...prevState, {
        id: givelastid(prevState) ,
        author ,
        text
      }])

   }
   function givelastid(array){
     return array.length ? array[array.length - 1].id + 1 : 0 ;
   }
   function botAnswer(){
      const lastAuthor = messagesList[messagesList.length -1];
      if(lastAuthor && lastAuthor.author){
         setMessagesList(prevState => [...prevState, {
            id: givelastid(prevState),
            text: `cooбщение от автора ${lastAuthor.author} отправлено!`
         }])
      }
   }
   return (
      <div>
        <form onSubmit={hundleSubmit}>
          <label For="text">Text</label>
          <input type="text" id ='text'value={text} onChange={(e) => setText(e.target.value)} />
          <label For="author">Автор</label>
          <input type="text" id='autor'value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button type='submit'>Добавить</button>
        </form>
        {messagesList.map((mess) =>{
           return (
              <div className='message' key={mess.id}>
               <div>
                 {mess.author && <p>Автор:{mess.author}</p>}
                 <p>{mess.author && <span>Text:</span>} {mess.text }</p>
                 </div>
              </div>
           );
        })}
      </div>


   );  
 
}

export default App;

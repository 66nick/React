import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import ChatPage from './ChatPage';
import NotFaundPage from './NotfaundPage';

function App() {
  
   return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/chat'} element={<ChatPage/>}/>
            <Route path={'*'} element={<NotFaundPage/>}/>

        </Routes>

  );


   
 
}

export default App;

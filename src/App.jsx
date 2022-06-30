import './App.scss';
import Message from './Message.jsx';

function App() {
  const text = 'Все получилось!!!';
  return (
    <div className="App">
      < Message props={text}/>
    </div>
  );
}

export default App;

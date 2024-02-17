import './App.css';
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import {useState} from "react";


function App() {

    const[notes, noteHook] = useState([{'active': true, 'text': 'a', 'date': new Date().toLocaleString(), 'id': 0}]);

  return (
      <div style={{paddingLeft: '30vw', paddingRight: '30vw'}}>
      <Header hook={noteHook} notes={notes}></Header>
      <Wrapper notes={notes} hook={noteHook}></Wrapper>
    </div>
  );
}

export default App;

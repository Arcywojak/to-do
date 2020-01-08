import React, { useState} from 'react';
import Header from './components/Header';
import ToDoContextProvider from './contexts/ToDoContext';
import DoneContextProvider from './contexts/DoneContext';
import ToDoList from './components/ToDoList';
import NewTaskForm from './components/NewTaskForm';
import Nav from './components/Nav'
import DoneList from './components/DoneList'
import ChangeComponentProvider,{ChangeComponent} from './contexts/changeComponentContext';



function App() {

  const [whatContent, setWhatContent] = useState(true)

  const content = whatContent ? (<ToDoList/>) : (<DoneList/>)

  if(!localStorage.getItem("tasks")){ localStorage.setItem("tasks","[]")}
  if(!localStorage.getItem("done")){ localStorage.setItem("done","[]")}

  return (
    <div className="App">
           <ToDoContextProvider>
              <DoneContextProvider>
               <ChangeComponentProvider>
                <Header/>
                <NewTaskForm/>
                <Nav setWhatContent={setWhatContent}/>
                {content}
               </ChangeComponentProvider>
              </DoneContextProvider>
           </ToDoContextProvider>
    </div>
  );
}

export default App;

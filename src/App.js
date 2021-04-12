import {useState} from "react";
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Note from "./Note/Note";
import CreateArea from "./CreateArea/CreateArea";

function App() {
  const [notes,setNotes] = useState([]);

  function addNote(newNote) {
     setNotes(prevNote => {
       return [...prevNote,newNote];
     })
  }

  function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
            return index !== id;
        })
      })
  }
  console.log(notes)
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd = {addNote}/>
      {
        notes.map((noteItem,index) =>{
          return <Note 
          key={index}
          id={index}
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote}/>
        }
      )
      }      
      <Footer/>
    </div>
  );
}

export default App;

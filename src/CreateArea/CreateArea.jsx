import React , {useState} from 'react'
import Note from '../Note/Note';
import "./createArea.css";

function CreateArea(props) {
    const [note , setNote] = useState({
        title : "",
        content : ""
    })
    function handleChange(e) {
        const {name,value} = e.target;
        console.log(e.target)
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name] : value
            }
        })
    }
    function submitNote(e) {
       e.preventDefault();
       props.onAdd(note);
    }
    return (
        <div className="create">
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote} className="addBtn">+</button>
            </form>
        </div>
    )
}

export default CreateArea

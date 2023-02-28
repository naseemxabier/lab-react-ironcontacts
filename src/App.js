import { useState } from "react";
import contactos from "./contacts.json";
import "./App.css";
function App() {
  const [contacts, setContacts] = useState(contactos.slice(0, 5));
  const addContact = () => {
    const random = Math.floor(Math.random() * contactos.length);
    const newContact = contactos[random];
    setContacts([newContact,...contacts]);
  }
  const sortPopularity = ()=> {
    const sortedContacts = [...contacts].sort(
      (a,b) =>b.popularity -a.popularity
    )
    setContacts(sortedContacts)
  }
  const sortName = () => {
    const sortedNames = [...contacts].sort(
      (a,b) => a.name.localeCompare(b.name)
    )
    setContacts(sortedNames)
  }

  const deleteName = (idContact) => {
    const deletedNames = (contacts.filter(contact => contact.id !== idContact))
    setContacts(deletedNames)
   
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button type="button" onClick={addContact}>
        Add Random Contacts
      </button>
      <button type="button" onClick={sortName}>Sort by Name</button>
      <button type="button" onClick={sortPopularity}>Sort by Popularity</button>
      
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img className="imagen" src={contact.pictureUrl} alt={contact.name}/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
              <td><button type ="button" onClick={()=>deleteName(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;







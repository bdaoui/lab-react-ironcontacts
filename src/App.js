import "./App.css";
import React, { useState } from 'react';
import contacts from "./contacts.json";

const copyContacts = [...contacts];
const firstFive = contacts.splice(0, 5);



function App() {
  const [celebs, setCelebs] = useState(firstFive);

  const choseRandom = () => {
    let i = Math.floor(Math.random() * copyContacts.length);
    let one = copyContacts.splice(i, 1);
    setCelebs = [].concat(firstFive, one);
    
  } 
  
  return <div className="App">

    <button onClick= {choseRandom}> ADD RANDOM</button>

    <table>
      <thead>Celeb Table</thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>

      </tr>
      {
      
      celebs.map(celeb =>{ 
        
       return (<tr key={celeb.id}>
        <td><img src={celeb.pictureUrl}  style={{height: "50vh"}}></img></td>
        <td>{celeb.name}</td>
        <td>{celeb.popularity}</td>
        <td>{celeb.wonOscar? "🏆" : ""}</td>
        <td>{celeb.wonEmmy?"🏆" : ""}</td>
      </tr>
      )

      })

      }
    </table>



  </div>;
}
export default App;
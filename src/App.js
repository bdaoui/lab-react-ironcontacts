import "./App.css";
import React, { useState } from 'react';
import contacts from "./contacts.json";

const firstFive = contacts.slice(0, 6);
function App() {
  const [celebs, setCelebs] = useState(firstFive);
  return <div className="App">

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
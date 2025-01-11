import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListeTache from './components/ListeTache';
import AjouterTache from './components/AjouterTache';
import ModifierTache from './components/ModifierTache';
import "./components/App.css";


function App() {

  const [Taches, setTaches] = useState([
    
  ]);
  return (

    <BrowserRouter>
      <center>
        <nav>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none' }}>Liste des Tâches</Link>
        <Link to="/ajouter" style={{ marginLeft: '15px', textDecoration: 'none' , color: 'green'  }}>Ajouter une Tâche</Link>
        </nav>
      </center>


      <Routes>
        <Route path="/" element={<ListeTache Taches={Taches} setTaches={setTaches} />} />

        <Route path="/ajouter" element={<AjouterTache Taches={Taches} setTaches={setTaches} />} />

        <Route path="/modifier/:id" element={<ModifierTache Taches={Taches} setTaches={setTaches} />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
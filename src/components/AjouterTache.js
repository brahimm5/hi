import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 

function AjouterTache({ Taches, setTaches }) {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Complete, setComplete] = useState(true); 
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaches = {
            id: Taches.length + 1,
            title: Title,
            description: Description,
            complete: Complete
        };
        setTaches([...Taches, newTaches]);
        navigation("/");
    };

    return (
        <form onSubmit={handleSubmit} className="ajouter-tache-form">
            <div className="form-group">
                <label>Title :</label>
                <input 
                    type="text" 
                    value={Title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label>Description :</label>
                <input 
                    type="text" 
                    value={Description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label>Status :</label>
                <input 
                    type="checkbox" 
                    checked={Complete} 
                    onChange={(e) => setComplete(e.target.checked)} 
                /> Completed
            </div>
            <button type="submit" className="submit-btn">Ajouter</button>
        </form>
    );
}

export default AjouterTache;

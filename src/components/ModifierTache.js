import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css"; 

function ModifierTache({ Taches, setTaches }) {
    const { id } = useParams();
    const tachenow = Taches.find((tache) => tache.id === parseInt(id));
    const [Title, setTitle] = useState(tachenow?.Title || "");
    const [Description, setDescription] = useState(tachenow?.Description || "");
    const [Complete, setComplete] = useState(tachenow?.Complete || false);
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const tachesModifiees = Taches.map((tache) =>
            tache.id === parseInt(id) ? { ...tache, Title, Description, Complete } : tache
        );
        setTaches(tachesModifiees);
        navigation("/");
    };

    return (
        <form onSubmit={handleSubmit} className="modifier-tache-form">
            <div className="form-group">
                <label>Title :</label>
                <input
                    type="text"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label>Description :</label>
                <input
                    type="text"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <label>Complété :</label>
                <input
                    type="checkbox"
                    checked={Complete}
                    onChange={(e) => setComplete(e.target.checked)}
                />
            </div>
            <button type="submit" className="submit-btn">Modifier</button>
        </form>
    );
}

export default ModifierTache;

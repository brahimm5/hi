import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function ListeTache({ Taches, setTaches }) {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const handleDelete = (id) => {
        const updatedTaches = Taches.filter((tache) => tache.id !== id);
        setTaches(updatedTaches);
    };

    const toggleStatus = (id) => {
        const updatedTaches = Taches.map((tache) =>
            tache.id === id ? { ...tache, complete: !tache.complete } : tache
        );
        setTaches(updatedTaches);
    };

    const filteredTaches = Taches.filter((tache) => {
        const Status =
            filter === "all" ||
            (filter === "complete" && tache.complete) ||
            (filter === "incomplete" && !tache.complete);
        const Search = tache.title.toLowerCase().includes(search.toLowerCase());
        return Status && Search;
    });

    return (
        <center className="liste-tache">
            <h2 className="titre">Liste des Tâches</h2>

            <input
                type="radio"
                value="all"
                checked={filter === "all"}
                onChange={() => setFilter("all")}
            />
            <span style={{ marginRight: '50px' }}> Toutes </span>
            <input
                type="radio"
                value="complete"
                checked={filter === "complete"}
                onChange={() => setFilter("complete")}
            />
            <span style={{ marginRight: '50px' }}> Complétées </span>
            <input
                type="radio"
                value="incomplete"
                checked={filter === "incomplete"}
                onChange={() => setFilter("incomplete")}
            />
            <span style={{ marginRight: '50px' }}> Non Complétées</span>
            <br /><br />
            <div className="search-bar">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Rechercher par Titre..."
                />
            </div>

            <table className="tache-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTaches.map((tache) => (
                        <tr key={tache.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={tache.complete}
                                    onChange={() => toggleStatus(tache.id)}
                                />
                                {" "}
                                {tache.complete ? "Complétée" : "Non Complétée"}
                            </td>
                            <td>{tache.title}</td>
                            <td>{tache.description}</td>
                            <td>
                                <Link to={`/modifier/${tache.id}`} className="modifier-link">Modifier</Link>
                                <button onClick={() => handleDelete(tache.id)} className="supprimer-btn">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
    );
}

export default ListeTache;

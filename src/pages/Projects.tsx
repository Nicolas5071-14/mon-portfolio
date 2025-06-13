import React from "react";

const Projects: React.FC = () => (
    <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Projets</h2>
        <ul className="grid md:grid-cols-2 gap-4">
            <li className="p-4 shadow rounded bg-white">
                <h3 className="font-bold">Plateforme de digitalisation urbaine</h3>
                <p>React, Node.js, PostGIS — Automatisation des analyses spatiales pour la ville d’Antsirabe.</p>
            </li>
            <li className="p-4 shadow rounded bg-white">
                <h3 className="font-bold">Application gestion bibliothèque</h3>
                <p>Laravel + React/Vite — Gestion des emprunts et retour de livres avec interface moderne.</p>
            </li>
            <li className="p-4 shadow rounded bg-white">
                <h3 className="font-bold">Application mobile de vente de chaussures</h3>
                <p>React Native — Boutique en ligne optimisée mobile.</p>
            </li>
        </ul>
    </section>
);

export default Projects;
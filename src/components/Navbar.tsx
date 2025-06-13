import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Nicolas Portfolio</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Accueil</Link>
                <Link to="/about" className="hover:underline">À propos</Link>
                <Link to="/projects" className="hover:underline">Projets</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
        </div>
    </nav>
);

export default Navbar
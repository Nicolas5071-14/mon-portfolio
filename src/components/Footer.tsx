import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        <p>&copy; {new Date().getFullYear()} Nicolas Abelson Ramahalefitra. Tous droits réservés.</p>
    </footer>
);

export default Footer;
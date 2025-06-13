import React from "react";

const Home: React.FC = () => (
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Bienvenue sur mon Portfolio</h2>
        <p className="text-lg mb-6">Développeur Full-Stack spécialisé SIG</p>
        <div className="space-x-4">
            <a href="/A_Nicolas_cv.pdf" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Télécharger CV</a>
            <a href="/contact" className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-900">Me contacter</a>
        </div>
    </section>
);

export default Home;
import React from "react";

const Contact: React.FC = () => (
    <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4 max-w-lg">
            <input type="text" placeholder="Votre nom" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Votre email" className="w-full p-2 border rounded" />
            <textarea placeholder="Votre message" className="w-full p-2 border rounded" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Envoyer</button>
        </form>
        <div className="mt-4">
            <p>Email : ramahalefitra.abelson.nicolas@gmail.com</p>
            <p>Téléphone : +261348960049</p>
        </div>
    </section>
);

export default Contact;
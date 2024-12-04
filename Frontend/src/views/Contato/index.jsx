import { useState } from "react";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";


const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulação de envio de formulário (aqui você faria uma requisição para um backend)
        if (name && email && message) {
            setSuccessMessage("Mensagem enviada com sucesso!");
            setErrorMessage("");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setErrorMessage("Por favor, preencha todos os campos.");
            setSuccessMessage("");
        }
    };

    return (
        <div>
            <NavBar />
            <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Entre em contato</h2>

                    {/* Success Message */}
                    {successMessage && (
                        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                            {successMessage}
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Seu Nome</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu nome"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Seu E-mail</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Sua Mensagem</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite sua mensagem"
                                rows="4"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}


export default ContactPage;
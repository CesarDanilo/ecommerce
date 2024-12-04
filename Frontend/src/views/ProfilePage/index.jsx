import CreditCard3D from "Components/CreditCard3D";
import React, { useState } from "react";

const ProfilePage = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@example.com",
        profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
        paymentMethod: {
            cardNumber: "",
            cardName: "",
            expiryDate: "",
            cvv: ""
        },
        address: {
            street: "",
            city: "",
            state: "",
            zip: ""
        }
    });

    // Função para atualizar o estado do formulário
    const handleChange = (e, category, field) => {
        const value = e.target.value;
        setUser(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [field]: value
            }
        }));
    };

    // Função para salvar as alterações
    const handleSave = () => {
        alert("Informações salvas!");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Cabeçalho do perfil */}
                <div className="flex items-center mb-8">
                    <img
                        src={user.profilePicture}
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold">{user.name}</h2>
                        <p className="text-gray-500">{user.email}</p>
                    </div>
                </div>
                <div>
                    <CreditCard3D />
                </div>

                {/* Formulário de pagamento */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Método de Pagamento</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Número do Cartão</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                value={user.paymentMethod.cardNumber}
                                onChange={(e) => handleChange(e, "paymentMethod", "cardNumber")}
                                placeholder="1234 5678 9101 1121"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nome no Cartão</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                value={user.paymentMethod.cardName}
                                onChange={(e) => handleChange(e, "paymentMethod", "cardName")}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 pr-2">
                                <label className="block text-gray-700">Data de Expiração</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    value={user.paymentMethod.expiryDate}
                                    onChange={(e) => handleChange(e, "paymentMethod", "expiryDate")}
                                    placeholder="MM/AA"
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-700">CVV</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    value={user.paymentMethod.cvv}
                                    onChange={(e) => handleChange(e, "paymentMethod", "cvv")}
                                    placeholder="123"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Formulário de endereço */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Endereço de Entrega</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Rua</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                value={user.address.street}
                                onChange={(e) => handleChange(e, "address", "street")}
                                placeholder="Av. Brasil, 123"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Cidade</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                value={user.address.city}
                                onChange={(e) => handleChange(e, "address", "city")}
                                placeholder="São Paulo"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Estado</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                value={user.address.state}
                                onChange={(e) => handleChange(e, "address", "state")}
                                placeholder="SP"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">CEP</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                value={user.address.zip}
                                onChange={(e) => handleChange(e, "address", "zip")}
                                placeholder="12345-678"
                            />
                        </div>
                    </form>
                </div>

                {/* Botões de salvar e editar */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

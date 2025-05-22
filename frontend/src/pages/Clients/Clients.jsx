import { useEffect, useState } from "react";
import Tabela from "../../components/Tabela";
import FormClient from "./FormClient";

export default function Clients() {

    const [clients, setClients] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const colsClients = [
        { key: "id", label: "ID" },
        { key: "name", label: "Nome" },
        { key: "email", label: "E-mail" },
        { key: "cnpj", label: "CNPJ" },
        { key: "createdAt", label: "Criado em" },
    ]

    useEffect(() => {
        setClients([
            { id: 1, name: "Cliente 1", email: "teste@teste", cnpj: "12.345.678/0001-90", createdAt: new Date().toLocaleString() },
            { id: 2, name: "Cliente 2", email: "teste@teste", cnpj: "12.345.678/0001-90", createdAt: new Date().toLocaleString() },
            { id: 3, name: "Cliente 3", email: "teste@teste", cnpj: "12.345.678/0001-90", createdAt: new Date().toLocaleString() },
            { id: 4, name: "Cliente 4", email: "teste@teste", cnpj: "12.345.678/0001-90", createdAt: new Date().toLocaleString() },
        ]);
    }, [])

    const handleAddClient = (client) => {
        const novo = { ...client, id: Date.now() };
        setClients([...clients, novo])
    }

    const hendleEdit = (client) => {
        alert("Editar cliente: " + client.name);
    }

    const handleDelete = (client) => {
        const confirm = window.confirm(`Tem certeza que deseja EXCLUIR ${client.name}?`);
        if (confirm) {
            setClients(clients.filter((c) => c.id !== client.id))
        }
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2x1 font-bold">Clientes</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setShowModal(true)}>
                    + Novo Cliente
                </button>
            </div>
            <Tabela
                data={clients}
                cols={colsClients}
                onEdit={hendleEdit}
                onDelete={handleDelete}
                onHoverInfo={(client) => (
                    <>
                        <p><strong>ID:</strong> {client.id}</p>
                        <p><strong>Nome:</strong> {client.name}</p>
                        <p><strong>E-mail:</strong> {client.email}</p>
                        <p><strong>CNPJ:</strong> {client.cnpj}</p>
                    </>
                )}
            />
            {
                showModal && (
                    <FormClient onClose={() => setShowModal(false)} onSave={handleAddClient} />
                )
            }
        </div>
    );
}
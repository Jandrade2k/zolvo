import { useEffect, useState } from "react";
import Tabela from "../../components/Tabela";
import FormUser from "./FormUser";


export default function Users() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const colsUsers = [
        { key: "id", label: "ID" },
        { key: "name", label: "Nome" },
        { key: "email", label: "E-mail" },
        { key: "role", label: "Função" },
        { key: "createdAt", label: "Criado em" },
    ]

    useEffect(() => {
        setUsers([
            { id: 1, name: "User Admin", email: "teste@teste.com", role: "admin", createdAt: new Date().toLocaleString() },
            { id: 2, name: "User Atendente", email: "teste@teste.com", role: "atendente", createdAt: new Date().toLocaleString() },
            { id: 3, name: "User Tecnico", email: "teste@teste.com", role: "tecnico", createdAt: new Date().toLocaleString() },
            { id: 4, name: "User Cliente", email: "teste@teste.com", role: "cliente", createdAt: new Date().toLocaleString() },
        ]);
    }, []);

    const handleAddUser = (user) => {
        const novo = {...user, id: Date.now()};
        setUsers([...users, novo])
    }

    const handleEdit = (user) => {
        alert("Editar usuário: " + user.name);
    }

    const handleDelete = (user) => {
        const confirm = window.confirm(`Tem certeza que deseja EXCLUIR ${user.name}?`);
        if (confirm) {
            setUsers(users.filter((u) => u.id !== user.id))
        }
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2x1 font-bold">Usuários</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setShowModal(true)}>
                    + Novo Usuário
                </button>
            </div>
            <Tabela
             data={users}
              cols={colsUsers}
               onEdit={handleEdit}
                onDelete={handleDelete}
                 onHoverInfo={(user) => (
                <>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Nome:</strong> {user.name}</p>
                    <p><strong>E-mail:</strong> {user.email}</p>
                    <p><strong>Função:</strong> {user.role}</p>
                </>
            )}
             />
            {
                showModal && (
                    <FormUser onClose={() => setShowModal(false)} onSave={handleAddUser} />
                )
            }
        </div>
    );
}
import { useEffect, useState } from "react";
import FormUser from "./FormUser";


export default function Users() {
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [hoverUser, setHoverUser] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setUsers([
            { id: 1, name: "User Admin", email: "teste@teste.com", role: "admin" },
            { id: 2, name: "User Atendente", email: "teste@teste.com", role: "atendente" },
            { id: 3, name: "User Tecnico", email: "teste@teste.com", role: "tecnico" },
            { id: 4, name: "User Cliente", email: "teste@teste.com", role: "cliente" },
        ]
    )
    }
);

    const handleMouseEnter = (user) => {
        setHoverUser(user);
    }

    const handleMouseLeave = () => {
        setHoverUser(null);
    }

    const handleMouseMove = (e) => {
        setMousePos({x: e.clientX, y: e.clientY})
    }

    const handleAddUser = (user) => {
        const novo = {...user, id: Date.now()};
        setUsers([...users, novo])
    }

    return (
        <div className="p-6 relative" onMouseMove={handleMouseMove}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2x1 font-bold">Usuários</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setShowForm(true)}>
                    + Novo Usuário
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4">Nome</th>
                            <th className="py-3 px-4">E-mail</th>
                            <th className="py-3 px-4">Tipo</th>
                            <th className="py-3 px-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="py-3 px-4" onMouseEnter={() => handleMouseEnter(user)} onMouseLeave={handleMouseLeave}>{user.name}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.role}</td>
                                <td className="py-3 px-4">
                                    <button className="text-blue-600 hover:underline">Editar</button>
                                    <button className="text-red-600 hover:underline ml-4">Excluir</button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center py-3">
                                    Nenhum usuário encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {hoverUser && (
                    <div className="absolute z-50 bg-white border shadow-md rounded-lg p-4 text-sm w-64 transition-all duration-150"
                    style={{
                        top: mousePos.y + 20,
                        left: mousePos.x + 20
                    }}>
                        <p><strong>Nome:</strong> {hoverUser.nome}</p>
                        <p><strong>E-mail:</strong> {hoverUser.email}</p>
                        <p><strong>Tipo:</strong> {hoverUser.tipo}</p>
                        <p><strong>Data de Criação:</strong> {new Date(hoverUser.createdAt).toLocaleDateString()}</p>
                        </div>
                )}
            </div>
            {showForm && (
                <FormUser onClose={() => setShowForm(false)} onSave={handleAddUser} />
            )}
        </div>
    );
}
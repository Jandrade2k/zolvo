import { useState } from "react";

export default function Tabela({data = [], onEdit, onDelete}) {
       const [hover, setHover] = useState(null);
       const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
   
   
       const handleMouseEnter = (data) => {
           setHover(data);
       }
   
       const handleMouseLeave = () => {
           setHover(null);
       }
   
       const handleMouseMove = (e) => {
           setMousePos({x: e.clientX, y: e.clientY})
       }
   
       return (
           <div className="relative" onMouseMove={handleMouseMove}>
            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2">Nome</th>
                        <th className="px-4 py-2">E-mail</th>
                        <th className="px-4 py-2">Tipo</th>
                        <th className="px-4 py-2">Criado em</th>
                        <th className="px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => (
                            <tr key={user.id} className="border-t">
                                <td className="py-2 px-4 relative" onMouseEnter={() => handleMouseEnter(user)}
                                    onMouseLeave={handleMouseLeave}>
                                        {user.name}
                                    </td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4 capitalize">{user.role}</td>
                                    <td className="py-2 px-4 space-x-2">
                                        <button className="text-blue-600 hover:underline" onClick={() => onEdit(user)}>Editar</button>
                                        <button className="text-red-600 hover:underline" onClick={() => onDelete(user)}>Excluir</button>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                hover && (
                    <div className="absolute z-50 bg-white border shadow-md rounded-lg p-4 text-sm w-64" style={{top: mousePos.y -20, left: mousePos.x +20}}>
                        <p><strong>Nome:</strong>{hover.name}</p>
                        <p><strong>E-mail:</strong>{hover.email}</p>
                        <p><strong>Função:</strong>{hover.role}</p>
                        <p><strong>ID:</strong>{hover.id}</p>
                    </div>
                )
            }
           </div>
       );
}
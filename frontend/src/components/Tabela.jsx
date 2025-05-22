import { useState } from "react";

export default function Tabela({data = [], cols = [], onEdit, onDelete, onHoverInfo}) {
       const [hover, setHover] = useState(null);
       const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
   
       return (
           <div className="relative" onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
            <table className="min-w-full bg-white rounded shadow">
                {console.log(cols)}
                <thead>
                    <tr className="bg-gray-100 text-left">
                        {
                            cols.map((col) => (
                                <th key={col.key} className="py-2 px-4">{col.label}</th>
                            ))
                        }
                        <th className="px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.map((item) => (
                        <tr key={item.id} className="border-t">
                            {cols.map((col) => (
                                <td key={col.key} className="py-2 px-4"  onMouseEnter={() => setHover(item)} onMouseLeave={() => setHover(null)}>
                                    {item[col.key]}
                                </td>
                            ))}
                            <td className="py-2 px-4 space-x-2">
                                <button className="text-blue-600 hover:underline" onClick={() => onEdit?.(item)}>
                                    Editar
                                </button>
                                <button className="text-red-600 hover:underline" onClick={() => onDelete?.(item)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                       ))
                    }
                </tbody>
            </table>
            {
                hover && onHoverInfo && (
                    <div className="absolute z-50 bg-white border shadow-md rounded-lg p-4 text-sm w-64" style={{top: mousePos.y -100, left: mousePos.x + 20}}>
                        {onHoverInfo(hover)}
                    </div>
                )
            }
           </div>
       );
}
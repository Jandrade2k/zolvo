import { useEffect, useState } from "react";
import Tabela from "../../components/Tabela";
import FormTask from "./FormTask";


export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const colsTasks = [
        { key: "id", label: "ID" },
        { key: "client", label: "Cliente" },
        { key: "type", label: "Tipo" },
        { key: "phone", label: "Telefone" },
        { key: "description", label: "Descrição" },
        { key: "createdAt", label: "Aberto em" },
    ]

    useEffect(() => {
        setTasks([
            { id: 1, client: "Coca-cola", type: "Suporte", phone: "(11) 1111-1111", createdAt: new Date().toLocaleString() },
            { id: 2, client: "Amazon", type: "Visita técnica", phone: "(11) 1111-1111", createdAt: new Date().toLocaleString() },
            { id: 3, client: "Ponto Socorro", type: "Visita", phone: "(11) 1111-1111", createdAt: new Date().toLocaleString() },
            { id: 4, client: "Adidas", type: "Treinamento", phone: "(11) 1111-1111", createdAt: new Date().toLocaleString() },
        ]);
    }, []);

    const handleAddTask = (task) => {
        const novo = {...task, id: Date.now()};
        setTasks([...tasks, novo])
    }

    const handleEdit = (task) => {
        alert("Editar chamado: " + task.id);
    }

    const handleDelete = (task) => {
        const confirm = window.confirm(`Tem certeza que deseja EXCLUIR ${task.id}?`);
        if (confirm) {
            setTasks(tasks.filter((u) => u.id !== task.id))
        }
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2x1 font-bold">Chamados</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setShowModal(true)}>
                    + Novo Chamado
                </button>
            </div>
            <Tabela
             data={tasks}
              cols={colsTasks}
               onEdit={handleEdit}
                onDelete={handleDelete}
                 onHoverInfo={(task) => (
                <>
                    <p><strong>ID:</strong> {task.id}</p>
                    <p><strong>Cliente:</strong> {task.client}</p>
                    <p><strong>Telefone:</strong> {task.phone}</p>
                    <p><strong>Descrição:</strong> {task.description}</p>
                    <p><strong>Data de abertura</strong>{task.createdAt}</p>
                </>
            )}
             />
            {
                showModal && (
                    <FormTask onClose={() => setShowModal(false)} onSave={handleAddTask} />
                )
            }
        </div>
    );
}
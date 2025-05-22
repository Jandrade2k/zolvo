import { useState } from "react";

export default function FormTask({onClose, onSave}) {
    const [form, setForm] = useState({
        client: "",
        phone: "",
        type: "",
        description: "",
        createdAt: new Date().toLocaleString()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
        onClose();
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
                <h3 className="text-x1 font-bold mb-4">Novo Chamado</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Cliente</label>
                        <input type="text" name="client" value={form.client} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <input type="number" name="phone" value={form.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Descrição</label>
                        <input type="text" name="description" value={form.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Tipo</label>
                        <select type="text" name="type" value={form.type} onChange={handleChange} className="w-full border px-3 py2 rounded">
                            <option value="visita tecnica">Visita Técnica</option>
                            <option value="suporte">Suporte</option>
                            <option value="treinamento">Treinamento</option>
                            <option value="renovação">Renovação</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2 pt-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

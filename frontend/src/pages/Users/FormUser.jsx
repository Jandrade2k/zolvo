import { useState } from "react";

export default function FormUser({onClose, onSave}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "cliente",
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
                <h3 className="text-x1 font-bold mb-4">Novo Usuário</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Nome</label>
                        <input type="text" name="Nome" value={form.nome} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">E-mail</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Senha</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Tipo</label>
                        <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full border px-3 py2 rounded">
                            <option value="admin">Admin</option>
                            <option value="suporte">Suporte</option>
                            <option value="cliente">Cliente</option>
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

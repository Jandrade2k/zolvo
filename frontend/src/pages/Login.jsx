import { useState } from "react";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="minh-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-300 text-white">
            <div className="max-w-4x1 w-full p-4 flex flex-col md:flex-row items-center justify-arround">
                <div className="mb-10 md:mb-0 md:w-1/2 text-center md:text-left">
                    <h1 className="text-4x1 font-bold mb-4">Zolvo</h1>
                    <p className="text-lg">
                        Sistema inteligente de gestão de tarefas e clientes.
                    </p>
                </div>
                <div className="bg-white text-gray-400 p-8 rounded-1x shadow-lg w-full max-w-md">
                    <div className="flex justify-between mb-6">
                        
                        <button
                        disabled={isLogin}
                         className={`font-semibold ${!isLogin ? "text-blue-600" : "text-grey-500"}`}
                        onClick={() => setIsLogin(true)}>
                                    Acessar sua conta
                        </button>
                        <button
                        disabled={!isLogin}
                        className={`font-semibold ${isLogin ? "text-blue-600 " : "text-grey-500"}`}
                        onClick={() => setIsLogin(false)}>
                                    Criar conta
                        </button>
                    </div>
                    {
                    isLogin ? (
                        <form className="space-y-4">
                            <input type="email" placeholder="E-mail" className="w-full p-2 border rounded-md" />
                            <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Entrar</button>
                        </form>
                    ) : (
                        <form className="space-y-4">
                           <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md" />
                           <input type="email" placeholder="E-mail" className="w-full p-2 border rounded-md" />
                           <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                           <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                                 Create Account
                           </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
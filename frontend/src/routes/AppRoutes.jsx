import {Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Users from '../pages/Users';
import Clients from '../pages/Clients';
import Tasks from '../pages/Tasks';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />

            {/* Rotas protegidas */}
            <Route path="/users" element={<ProtectedRoute allowedRoles={['admin']}><Users /></ProtectedRoute>} />
            <Route path="/clients" element={<ProtectedRoute allowedRoles={['admin', 'atendente']}><Clients /></ProtectedRoute>} />
            <Route path="/tasks" element={<ProtectedRoute allowedRoles={['admin', 'tecnico']}><Tasks /></ProtectedRoute>} />

            {/* Rotas públicas */}
        </Routes>
    )
}
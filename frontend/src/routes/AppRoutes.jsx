import {Routes, Route, Navigate} from 'react-router-dom';
import Login from '../pages/Login';
import Users from '../pages/Users/Users';
import Clients from '../pages/Clients/Clients';
import Tasks from '../pages/Tasks/Tasks';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />}></Route>

            {/* Rotas protegidas */}
            <Route path="/users" element={<ProtectedRoute allowedRoles={['admin']}><Users /></ProtectedRoute>} />
            <Route path="/clients" element={<ProtectedRoute allowedRoles={['admin', 'atendente']}><Clients /></ProtectedRoute>} />
            <Route path="/tasks" element={<ProtectedRoute allowedRoles={['admin', 'tecnico']}><Tasks /></ProtectedRoute>} />

        </Routes>
    )
}
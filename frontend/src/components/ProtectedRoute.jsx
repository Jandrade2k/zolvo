import {Navigate} from "react-router-dom";

const fakeUser = {
    isAuthenticated: true,
    role: 'admin'
};

export default function ProtectedRoute({children, allowedRoles}) {
    if (!fakeUser.isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (!allowedRoles.includes(fakeUser.role)) {
        return <Navigate to="/" />;
    }
    return children;
}
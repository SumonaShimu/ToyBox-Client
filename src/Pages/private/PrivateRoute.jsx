import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if (loading) {
        return <div className='text-center' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%)', height: '200px', width: '200px', fontSize: '50px' }}>
            loading...
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
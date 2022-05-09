import { Navigate } from 'react-router-dom';

import * as authService from '../../services/authServices';

const Logout = ({
    onLogout
}) => {
    authService.logout();
    onLogout();

    return <Navigate to="/login" />;

};

export default Logout;
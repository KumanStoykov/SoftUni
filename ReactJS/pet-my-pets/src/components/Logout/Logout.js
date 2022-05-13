import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authServices';
import { AuthContext } from '../../contexts/authContext';
import { useContext, useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/dashboard');
            })

    }, []);    

    return null;

};

export default Logout;
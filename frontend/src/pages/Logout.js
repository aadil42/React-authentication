import { redirect } from 'react-router-dom';

const Logout = () => {

}

export const action = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/');
}


export default Logout;
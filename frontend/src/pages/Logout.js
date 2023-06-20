import { redirect } from 'react-router-dom';

const Logout = () => {

}

export const action = () => {
    localStorage.removeItem('token');
    return redirect('/');
}


export default Logout;
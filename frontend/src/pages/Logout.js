import { redirect } from 'react-router-dom';

const Logout = () => {

}

export const action = () => {
    localStorage.removeItem('token');
    redirect('/');
}


export default Logout;
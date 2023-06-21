import { redirect } from "react-router-dom";

const getTokenDuration = () => {

    const storedExpirationHour = localStorage.getItem('expiration');
    const  expirationHour = new Date(storedExpirationHour);
    const now = new Date();
    const duration = expirationHour.getHours() - now.getHours();
    return duration;
}

const getAuthToken = () => {
    const token = localStorage.getItem('token');
    if(!token) return null;
    
    const remainigTimeToExpire = getTokenDuration();
    if(remainigTimeToExpire <= 0) {
        return 'EXPIRE';
    }
    
    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkToken = () => {
    const token = getAuthToken();
    if(!token) return redirect('/auth');
    return null;
}

export default getAuthToken
const getAuthToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export default getAuthToken
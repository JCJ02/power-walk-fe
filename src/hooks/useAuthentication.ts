const useAuthentication = () => {
    const token = localStorage.getItem('token');
    return token;
};

export default useAuthentication;

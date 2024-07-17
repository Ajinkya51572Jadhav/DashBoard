import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


// Create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7080', // Set your base URL here
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp - currentTime < 60) { // Check if token is about to expire (within 1 minute)
                const newToken = await refreshToken();
                config.headers['Authorization'] = `Bearer ${newToken}`;
            } else {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Function to refresh token
const refreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/api/refresh-token', { token: refreshToken });
        const newToken = response.data.token;
        localStorage.setItem('token', newToken);
        return newToken;
    } catch (error) {
        console.error('Unable to refresh token', error);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // Redirect to login
    }
};

export default axiosInstance;

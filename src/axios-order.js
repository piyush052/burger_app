import axios from 'axios';



const axiosInstance = axios.create({
    baseURL:"https://burgerapp052.firebaseio.com/"
});

export default axiosInstance;
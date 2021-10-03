import axios from "axios";

const HttpClient = axios.create({
    baseURL: 'http://localhost/api/',
    headers: {
        'X-visitor-id': localStorage.getItem('visitor-id') == null ? "" : localStorage.getItem('visitor-id'),
        'Accept' : 'application/json',
    }
});

export default HttpClient;

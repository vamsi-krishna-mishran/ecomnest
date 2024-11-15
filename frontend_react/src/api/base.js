import axios from "axios";

const uri = ""; // Your backend URL
const token = localStorage.getItem("ecomtoken"); // Read token from local storage

export const API = axios.create({
    //withCredentials: true,
    baseURL: uri,
    headers: {
        'Authorization': token
    }
});
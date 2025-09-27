import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;


export const fetchPost = async () => {
    const res = await axios.get(`${API_BASE_URL}/posts`);
    return res.data;
}

export const createPost = async (data, token) => {
    console.log(data, "create post data");
    console.log(token, "TOKEN");
    const res = await axios.post(`${API_BASE_URL}/posts`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;

}
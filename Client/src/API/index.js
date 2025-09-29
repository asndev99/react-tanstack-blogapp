import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;


export const fetchPost = async (pageParams) => {
    const res = await axios.get(`${API_BASE_URL}/posts`, { params: { page: pageParams } });
    return res.data;
}

export const createPost = async (data, token) => {
    const res = await axios.post(`${API_BASE_URL}/posts`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    })
    return res.data;
}

export const getPostBySlug = async (slug) => {
    const res = await axios.get(`${API_BASE_URL}/posts/${slug}`);
    return res.data;
}

export const getPostComments = async (postId) => {
    const res = await axios.get(`${API_BASE_URL}/comments/${postId}`);
    return res.data;
}

export const addComent = async (token, data, postId) => {
    const res = await axios.post(`${API_BASE_URL}/comments/${postId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const getSavedPosts = async(token) => {
    const res = await axios.get(`${API_BASE_URL}/users/saved`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return res.data;
}
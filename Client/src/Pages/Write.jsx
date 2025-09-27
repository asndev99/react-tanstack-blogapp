import { useAuth, useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new';
import { useMutation } from "@tanstack/react-query"
import { createPost } from '../API';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Write = () => {
    const [value, setValue] = useState('');
    const { isLoaded, isSignedIn } = useUser();
    const { getToken } = useAuth();

    const navigate = useNavigate()

    // Define mutation
    const mutation = useMutation({
        mutationFn: async (data) => {
            const token = await getToken();
            return createPost(data, token);
        },
        onSuccess: (data) => {
            console.log("✅ Post created:", data);
            toast("Post Created Successfully");
            navigate(`/${data.slug}`)
        },
        onError: (error) => {
            toast.error(error.message);
            console.error("❌ Error creating post:", error);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.append("content", value);

        console.log([...formData.entries()]);
        mutation.mutate(formData);
    };


    return (
        <div className='h-screen flex flex-col gap-6'>
            <h1>Create A New Post</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <input
                    name='file'
                    type="file"
                    className="
                     block w-full max-w-xs text-sm text-gray-700
                     file:mr-4 file:py-2 file:px-4 
                     file:rounded-lg file:border-0 
                     file:text-sm file:font-medium
                     file:bg-blue-600 file:text-white
                     hover:file:bg-blue-700
                     cursor-pointer shadow-lg rounded-xl
                     transition duration-200 ease-in-out
                    "
                />
                <input
                    className="text-4xl font-semibold bg-transparent outline-none"
                    type='text'
                    placeholder='My Awesome Story'
                    name='title'
                />
                <div className='flex items-center gap-2'>
                    <label htmlFor='category'>Choose A Category</label>
                    <select name='category' className='p-2 rounded-xl bg-white shadow-md'>
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="marketing">Marketing</option>
                        <option value="seo">Search Engine</option>
                    </select>
                </div>
                <textarea
                    name='desc'
                    placeholder='Short Description'
                    className='p-2 rounded-xl bg-white shadow-md'
                />
                <div className="flex-1 rounded-xl bg-white shadow-md overflow-hidden">
                    <ReactQuill
                        theme="snow"
                        className='h-64'
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <button
                    type="submit"
                    className="
            bg-blue-800 
            text-white 
            font-medium 
            rounded-full 
            mt-4 mb-4
            px-6 py-3 
            w-36
            shadow-md
            hover:bg-blue-700
            hover:shadow-lg
            active:scale-95
            transition-all 
            duration-200
          "
                >
                    {mutation.isPending ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default Write;

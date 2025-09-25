import { useUser } from '@clerk/clerk-react'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new';

const Write = () => {

    const { isLoaded, isSignedIn } = useUser()

    // if (!isLoaded) {
    //     return <div className=''>...Loading</div>
    // }

    // if(isLoaded && !isSignedIn){
    //     return <div>Login To Create Amazing Blogs</div>
    // }
    return (
        <div className='h-screen flex flex-col gap-6'>
            <h1 className=''>Create A New Post</h1>
            <form className='flex flex-col gap-6'>
                <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none" type='text' placeholder='My Awesome Story'/>
                <div className='flex items-center gap-2'>
                    <label htmlFor=''>Choose A Category</label>
                    <select name='cat' id='' className='p-2 rounded-xl bg-white shadow-md'>
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="marketing">Marketing</option>
                        <option value="seo">Search Engine</option>
                        <option value=""></option>
                    </select>
                </div>
                <textarea name='desc' placeholder='Short Description' className='p-2 rounded-xl bg-white shadow-md'/>
                <ReactQuill theme="snow" className='flex-1 p-2 rounded-xl bg-white shadow-md'/>
                <button></button>
            </form>
        </div>
    )
}

export default Write
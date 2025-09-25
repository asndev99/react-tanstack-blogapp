import React from 'react'
import { Link } from 'react-router-dom'
import featured from "../assets/featured1.jpeg"

const FeaturedPosts = () => {
    return (
        <div className='mt-8 flex flex-col lg:flex-row gap-8'>
            {/* first  */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                {/* Image  */}
                <img src={featured} className='rounded-3xl object-cover' />
                {/* details  */}
                <div className='flex items-center gap-8'>
                    <h1 className='font-semibold lg:text-lg'>01.</h1>
                    <Link className='text-blue-800 lg:text-lg' >Web Designs</Link>
                    <span className='text-gray-500'>2 days ago</span>
                </div>
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">asdadasdadasd saddddddddd asdadasd</Link>

            </div>

            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                {/* first */}
                <div className='flex items-center justify-between gap-4'>
                    <img src={featured} className='rounded-3xl object-cover w-1/3' />
                    <div className='w-2/3'>
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-blue-800'>Web Design</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>
                        <Link to="/" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                            Lorem Ispum sdad dsad ddddddddddd    dsad
                        </Link>
                    </div>
                </div>

                {/* second */}
                <div className='flex items-center justify-between gap-4'>
                    <img src={featured} className='rounded-3xl object-cover w-1/3' />
                    <div className='w-2/3'>
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-blue-800'>Web Design</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>
                        <Link to="/" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                            Lorem Ispum sdad dsad ddddddddddd    dsad
                        </Link>
                    </div>
                </div>

                {/* third */}
                <div className='lg:h-1/3 flex items-center justify-between gap-4'>
                    <img src={featured} className='rounded-3xl object-cover w-1/3' />
                    <div className='w-2/3'>
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-blue-800'>Web Design</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>
                        <Link to="/" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                            Lorem Ispum sdad dsad ddddddddddd    dsad
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts
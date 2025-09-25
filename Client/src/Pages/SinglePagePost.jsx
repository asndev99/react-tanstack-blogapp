import React from 'react'
import { Link } from 'react-router-dom'
import postImg from "../assets/postImg.jpeg";
import userImg from "../assets/userImg.jpeg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg"
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePagePost = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit, amet consecteur adipiscing elit. Ullam modi eum aut.
          </h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written By</span>
            <Link>John Doe</Link>
            <span>On</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            saddaaaaaa dsaaaaaaaaaaa dsa  asdadasdasdasdasdsad dsadasdasd asda dasdasdasdas dsaad
            saddaaaaaa dsaaaaaaaaaaa dsa  asdadasdasdasdasdsad dsadasdasd asda dasdasdasdas dsaad
            saddaaaaaa dsaaaaaaaaaaa dsa  asdadasdasdasdasdsad dsadasdasd asda dasdasdasdas dsaad
            saddaaaaaa dsaaaaaaaaaaa dsa  asdadasdasdasdasdsad dsadasdasd asda dasdasdasdas dsaad
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <img src={postImg} width={600} className='rounded-2xl' />
        </div>
      </div>

      {/* content  */}
      <div className='flex flex-col md:flex-row gap-8 items-start'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify flex-1'>
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i} className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
          ))}
        </div>

        {/* sidebar */}
        <div className="w-full md:w-1/3 px-4">
          <div className="sticky top-8 h-max p-4 border rounded-xl bg-gray-50 shadow">
            {/* Author */}
            <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
            <div>
              <img src={userImg} className="w-48 h-48 rounded-full object-cover" />
              <Link className="block mt-2 font-semibold">John Doe</Link>
              <p className="text-sm text-gray-600 mt-1">
                Lorem ipsum dolor sit amet consecutor
              </p>
              <div className="flex gap-2 mt-3">
                <Link><img src={facebook} /></Link>
                <Link><img src={instagram} /></Link>
              </div>
            </div>

            {/* Post Actions */}
            <PostMenuAction />

            {/* Categories */}
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="underline">All</Link>
              <Link className="underline">Web Design</Link>
              <Link className="underline">Development</Link>
              <Link className="underline">Databases</Link>
              <Link className="underline">Search Engines</Link>
            </div>

            {/* Search */}
            <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
            <Search />
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default SinglePagePost

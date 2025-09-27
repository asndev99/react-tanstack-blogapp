import { Link } from 'react-router-dom'
import postImage from "../assets/postImg.jpeg"
import {format} from "timeago.js";

const PostListItem = ({post}) => {
    return (
        <div className='flex flex-col xl:flex-row items-start gap-8 mb-12'>

            <div className='md:hidden xl:block'>
                <img src={post.img} className='object-cover rounded-2xl' />
            </div>

            <div className='flex flex-col gap-4 '>
                <Link to="/test" className="text-4xl font-semibold">
                    asdad asdsadasd sadadasdasd adsdsad asdasdsadasda dasd asdsad
                </Link>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <span>Written By</span>
                    <Link className='text-blue-800'>{post.user.username}</Link>
                    <span>on</span>
                    <Link className='text-blue-800'>{post.category}</Link>
                    <span>{format(post.createdAt)}</span>
                </div>
                <p>
                    {post.desc}
                </p>
                <Link  to={post.slug}className='underline text-blue-800'>Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem
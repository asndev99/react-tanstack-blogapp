import { Link } from 'react-router-dom'
import postImage from "../assets/postImg.jpeg"

const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row items-start gap-8 mb-12'>

            <div className='md:hidden xl:block'>
                <img src={postImage} className='object-cover rounded-2xl' />
            </div>

            <div className='flex flex-col gap-4 '>
                <Link to="/test" className="text-4xl font-semibold">
                    asdad asdsadasd sadadasdasd adsdsad asdasdsadasda dasd asdsad
                </Link>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <span>Written By</span>
                    <Link className='text-blue-800'>John Doe</Link>
                    <span>on</span>
                    <Link className='text-blue-800'>Web Designs</Link>
                    <span></span>
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic vitae, itaque aliquid, quidem facere excepturi numquam, magnam dicta veniam aut placeat dolore eum. Pariatur ducimus tempora delectus repellendus, maiores libero.
                </p>
                <Link className='underline text-blue-800'>Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem
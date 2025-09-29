import userImg from "../assets/userImg.jpeg";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
    return (
        <div className='p-4 bg-slate-50 rounded-xl mb-4'>
            <div className='flex gap-2 items-center'>
                <img src={userImg} className="w-10 h-10 rounded-full object-cover" width={40} />
                <span className="font-medium">{comment.user.username}</span>
                <span className="text-sm tezt-gray-500">{format(comment.createdAt)}</span>
            </div>
            <div className="mt-4">
                <p>
                    {comment.desc}
                </p>
            </div>
        </div>
    )
}

export default Comment
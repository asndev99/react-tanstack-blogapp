import userImg from "../assets/userImg.jpeg";


const Comment = () => {
    return (
        <div className='p-4 bg-slate-50 rounded-xl mb-4'>
            <div className='flex gap-2 items-center'>
                <img src={userImg} className="w-10 h-10 rounded-full object-cover" width={40}/>
                <span className="font-medium">John Doe</span>
                <span className="text-sm tezt-gray-500">2 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro vero laboriosam, esse, obcaecati pariatur culpa ipsam nulla incidunt hic eveniet dolores, autem numquam aliquid quo enim minima quam rem!
                </p>
            </div>
        </div> 
    )
}

export default Comment
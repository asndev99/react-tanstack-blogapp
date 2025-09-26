import { useState } from "react"
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"

const PostListPage = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-2xl mb-8">Development Blogs</h1>

      <button 
      className="block md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded md:hidden p-2 mb-4 rounded-2xl"
      onClick={()=> setOpen(prev => !prev)}
      >
        {open ? "Close" : "Filter Or Search"
        }</button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        {/* POST LIST  */}
        <div>
          <PostList/>
        </div>

        {/* SIDE MENU  */}
        <div className={`${open  ? "block" : "hidden"} md:block`}>
          <SideMenu/>
        </div>
      </div>
    </div>
  )
}

export default PostListPage
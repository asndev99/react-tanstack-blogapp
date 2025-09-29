import { Link, useParams } from "react-router-dom";
import postImg from "../assets/postImg.jpeg";
import userImg from "../assets/userImg.jpeg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "../API";
import { format } from "timeago.js";

const SinglePagePost = () => {
  const { slug } = useParams();

  const {
    isPending,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug,
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading post...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">
          Failed to load post: {error.message || "Unknown error"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Post detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {post?.title ?? "Unknown title"}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="underline">{post?.user?.username ?? "Anonymous"}</Link>
            <span>On</span>
            <Link className="underline">{post?.category ?? "Uncategorized"}</Link>
            <span>{post?.createdAt ? format(post.createdAt) : ""}</span>
          </div>
          <p className="text-gray-500 font-medium">{post?.excerpt ?? ""}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img
            src={post?.image || postImg}
            alt="Post cover"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8 items-start'> {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify flex-1'>
          {Array.from({ length: 40 }).map((_, i) =>
          (<p key={i} className="text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum.
          </p>))}
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 px-4">
          <div className="sticky top-8 h-max p-4 border rounded-xl bg-gray-50 shadow">
            {/* Author */}
            <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
            <div>
              <img
                src={post?.user?.profileImg || userImg}
                alt="Author"
                className="w-48 h-48 rounded-full object-cover"
              />
              <Link className="block mt-2 font-semibold">
                {post?.user?.username ?? "John Doe"}
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                {post?.user?.bio ?? "This author has no bio."}
              </p>
              <div className="flex gap-2 mt-3">
                {post?.user?.facebook && (
                  <Link to={post.user.facebook}>
                    <img src={facebook} alt="Facebook" />
                  </Link>
                )}
                {post?.user?.instagram && (
                  <Link to={post.user.instagram}>
                    <img src={instagram} alt="Instagram" />
                  </Link>
                )}
              </div>
            </div>

            {/* Post Actions */}
            <PostMenuAction post={post} />

            {/* Categories */}
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
              {post?.categories?.length ? (
                post.categories.map((cat, i) => (
                  <Link key={i} className="underline">
                    {cat}
                  </Link>
                ))
              ) : (
                <Link className="underline">Uncategorized</Link>
              )}
            </div>

            {/* Search */}
            <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
            <Search />
          </div>
        </div>
      </div>

      {/* Comments */}
      {post?._id && <Comments postId={post._id} />}
    </div>
  );
};

export default SinglePagePost;

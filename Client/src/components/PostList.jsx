import React from 'react'
import PostListItem from './PostListItem'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { fetchPost } from '../API';



const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined
  })

  return (
    <div className="flex flex-col gap-12 mb-8">
      {data?.pages.map((page, pageIndex) =>
        page.posts.map((post, i) => (
          <PostListItem key={`${pageIndex}-${i}`} post={post} />
        ))
      )}

      <button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="p-4 text-white bg-blue-800 rounded-full flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isFetchingNextPage ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          'Load More'
        )}
      </button>

    </div>
  )
}

export default PostList
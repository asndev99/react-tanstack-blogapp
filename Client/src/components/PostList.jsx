import React from 'react'
import PostListItem from './PostListItem'
import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../API';





const PostList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: [''],
    queryFn: () => fetchPost()
  })

  console.log(data,"data");

  return (
    <div className='flex flex-col gap-12 mb-8'>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  )
}

export default PostList
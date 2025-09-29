import React, { useState } from "react";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addComent, getPostComments } from "../API";
import { useAuth } from "@clerk/clerk-react";

const Comments = ({ postId }) => {
  const [comment, setComment] = useState("");
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const {
    isPending,
    isError,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getPostComments(postId),
    enabled: !!postId,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return addComent(token, { desc: comment }, postId);
    },
    onSuccess: () => {
      setComment("");
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>

      <div className="flex items-center justify-between gap-4 w-full">
        <textarea
          name="desc"
          className="w-full p-4 rounded-xl bg-white focus:outline-none border"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending || !comment.trim()}
          className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl disabled:opacity-50"
        >
          {mutation.isPending ? "Sending..." : "Send"}
        </button>
      </div>

      {isPending ? (
        <p className="text-gray-400">Loading comments...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : comments?.length ? (
        comments.map((item) => <Comment key={item._id} comment={item} />)
      ) : (
        <p className="text-gray-400">No comments yet. Be the first!</p>
      )}
    </div>
  );
};

export default Comments;

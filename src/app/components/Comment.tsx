// CommentComponent.js

import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

interface CommentProps {
    postId: number;
}

function CommentComponent({ postId }: CommentProps) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<{ _id: string, name: string, content: string }[]>([]);
    const {data : session} = useSession()

    const handleCommentSubmit = async () => {
        try {
            const response = await axios.post<{ comment: { _id: string, name: string, content: string } }>(`http://localhost:5000/api/post/comment/new`, {
                postId, // Pass the post ID to associate the comment with the post
                name: session?.user?.name ?? '', // You can adjust this based on your user authentication
                content: comment,
            });

            setComments((prevComments) => [...prevComments, response.data.comment]);
            setComment(''); // Clear the comment input field
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Post</button>
      </div>
      {/* <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.name}:</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default CommentComponent;

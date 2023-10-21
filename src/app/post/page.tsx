'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import {useSession } from "next-auth/react"

export default function IndiPost() {
    
    const {data: session} = useSession()

//   const [latestData, setLatestData] = useState<Post[]>([])

//   useEffect(() => {
//     async function fetchData() {
//     try {
//         const postsResponse = await axios.get(`http://localhost:5000/api/post/${fetchedPost._id}`);
//         const fetchedPosts: Post[] = postsResponse.data;

//         // // Fetch comments for each post
//         const postsWithComments = await Promise.all(
//             fetchedPosts.map(async (fetchedPost) => {
//                 const commentsResponse = await axios.get(`http://localhost:5000/api/post/comment/post/${fetchedPost._id}`);
//                 const comments : Comment[] = commentsResponse.data;
//                 return { ...fetchedPost, comments };
//             })
//         );

//         setLatestData(postsWithComments);
//     } catch (error) {
//         console.error(error);
//     }
//       }
//       fetchData();
//     },[]);

//   interface Post {
//     _id: string;
//     name: string;
//     title: string;
//     content: string;
//     comments: Comment[];
//   }

// interface Comment {
//     _id: string;
//     name: string;
//     content: string;
// }

return (
    <div>
        {/* {latestData.map((post) => (
            <div key={post._id}>
                <h2>{post.name}</h2>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <h3>Comments:</h3>
                <ul>
                    {post.comments.map((comment) => (
                        <li key={comment._id}>
                            <h4>{comment.name}</h4>
                            <p>{comment.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ))} */}

        <h1 className="text-4xl text-black">Post</h1>
    </div>
);
}
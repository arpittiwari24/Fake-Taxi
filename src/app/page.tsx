'use client'

import Hero from './components/Hero'
import FeaturesSection from './components/Features'
import Footer from './components/Footer'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CommentComponent from './components/Comment'
import Link from "next/link"

export default function Home() {
  const {data: session} = useSession()

  const [latestData, setLatestData] = useState<Post[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await axios.get('http://localhost:5000/api/post/all');
        const posts: Post[] = postsResponse.data;

        // Fetch comments for each post
        const postsWithComments = await Promise.all(
          posts.map(async (post) => {
            const commentsResponse = await axios.get(`http://localhost:5000/api/post/comment/post/${post._id}`);
            const comments : Comment[] = commentsResponse.data;
            return { ...post, comments };
          })
        );

        setLatestData(postsWithComments);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  interface Post {
    _id: string;
    name: string;
    title: string;
    content: string;
    comments: Comment[];
  }

  interface Comment {
    _id: string;
    name: string;
    content: string;
  }


  if(!session) {
    return (
      <>
      <div className='py-10'>
      <Hero />
      </div>
      <div className="py-10">
      <FeaturesSection />
      </div>
      <div className='pt-10'>
    <Footer />
    </div>
      </>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      {latestData.map((post: any) => (
        <div key={post._id} className="mb-8 border rounded-lg bg-white shadow-lg p-4">
          <div className="flex items-center mb-4">
          </div>
         <Link href="/post">
         <div className="mt-4">
          <p className="font-semibold text-lg mb-2">{post.name}</p>
          <p className=" text-lg mb-2">{post.title}</p>
            <p className="mb-4 shadow-lg bg-black text-white">{post.content}</p>
            <p className="mb-4 shadow-lg bg-black text-white">{post.comments[0].content}</p>
          </div>
         </Link>
          <CommentComponent postId={post._id} />
        </div>
      ))}
    </div>
  )
}

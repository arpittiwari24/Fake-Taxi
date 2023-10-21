'use client'

import axios from "axios"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"


export default function Post() {

    const [ title, setTitle] = useState("")
    const [ content, setContent] = useState("")
    const [posted, setPosted] = useState(false)
    const {data : session} = useSession()

    const email = session?.user?.email
    const name = session?.user?.name

    function handleSubmit(e: any) {
        e.preventDefault()

        axios.post("https://fake-taxi.onrender.com/api/post/new", {
           email,name, title, content
        })
        .then((response) => {
          setPosted(true)
        })
        .catch((err) => console.log(err))
    }

    if(posted) redirect("/")
    

    return (
      <div className="flex items-center justify-center lg:py-20">
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
        <form action="post" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-1">Title</label>
                <input type="text" id="title" name="title" className="w-full px-3 py-2 border rounded-lg text-white focus:outline-none focus:border-blue-400" placeholder="Enter a title" onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-1">Content</label>
                <textarea id="content" name="content"  className="w-full px-3 py-2 border rounded-lg text-white focus:outline-none focus:border-blue-400" placeholder="Write your post..." onChange={(e) => setContent(e.target.value)}  required></textarea>
            </div>
            <div className="mb-4">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    Post
                </button>
            </div>
        </form>
    </div>
</div>
    )
}
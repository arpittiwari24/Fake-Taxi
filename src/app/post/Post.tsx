'use client'

import axios from "axios"
import { useSession } from "next-auth/react"
import { useState } from "react"


export default function Post() {

    const [ title, setTitle] = useState("")
    const [ content, setContent] = useState("")
    const {data : session} = useSession()

    const email = session?.user?.email

    function handleSubmit(e: any) {
        e.preventDefault()

        const data: Promise<any> = axios.post("http://localhost:5000/api/post/new", {
           email, title, content
        }).then(() => console.log(data)).catch((err) => console.log(err))
    }

    return (
       <form action="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" className="form-control" onChange={(e) => setContent(e.target.value)} />
              </div>
              <button className="btn btn-info hover:bg-teal-300">Submit</button>
       </form>
    )
}
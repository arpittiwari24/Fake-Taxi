'use client'

import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"


export default function MyProfile() {
    
    const { data: session } = useSession();

    const email = session?.user?.email;

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        if (email) {
            axios
                .get(`http://localhost:5000/api/post/my?email=${email}`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => setPostData(res.data.data))
                .catch((err) => console.log(err));
        }
    }, [email]);
    
    return (
        <main>
            <ul className="text-center text-black">
        {postData && postData.map((post:any) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
        </main>
    )
}
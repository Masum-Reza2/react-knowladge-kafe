import { useEffect } from "react"
import { useState } from "react"

const Blogs = () => {

    // state-management and data-fetching
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="border border-black w-[60%]">
            <h1>Blogs {blogs.length}</h1>
        </div>
    )
}

export default Blogs

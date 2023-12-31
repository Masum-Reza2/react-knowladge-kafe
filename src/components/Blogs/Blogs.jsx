import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types';

const Blogs = ({ handleBookMark }) => {

    // state-management and data-fetching
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-[50%]">
            <h1 className="text-center text-2xl font-bold mb-5">Blogs {blogs.length}</h1>
            <div className="space-y-20">
                {blogs.map((blog, index) => <Blog handleBookMark={handleBookMark} key={index} blog={blog} />)}
            </div>
        </div>
    )
}

Blogs.propTypes = {
    handleBookMark: PropTypes.func.isRequired,
}

export default Blogs
import PropTypes from 'prop-types'; // ES6
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const Blog = ({ blog, handleBookMark }) => {
    // console.log(blog)
    let { id, title, cover, author, author_img, posted_date, reading_time, hash_tag } = blog;
    return (
        <div className='space-y-3'>
            <img className='rounded-md' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-center gap-5'>
                    <div><img className='w-[50px] h-[50px] rounded-full' src={author_img} alt={`image of author`} /></div>
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <p className='text-gray-500'>{reading_time} min to read</p>
                    <button onClick={() => handleBookMark(blog)} className='text-2xl text-red-500'><BsFillBookmarkPlusFill /></button>
                </div>
            </div>
            <h3 className='font-bold text-xl'>{title}</h3>
            <div className='flex gap-2'>
                {hash_tag.map((tag,index) => <p className='text-gray-500' key={index}><a href="">#{tag}</a></p>)}
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark : PropTypes.func.isRequired,
}
export default Blog
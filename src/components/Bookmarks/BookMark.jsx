import PropTypes from 'prop-types';

const BookMark = ({ bookMarks }) => {
    return (
        <div className="w-[30%] space-y-2">
            <div className='bg-violet-200 rounded-md'><h1 className='text-center text-blue-600 font-semibold text-lg border p-2 rounded-md'>Spent time on read : 177 min</h1></div>
            <div className='bg-gray-200 rounded-md py-5'>
                <h1 className="text-center font-bold text-xl">BookMarked blogs : {bookMarks.length}</h1>
                <div className='space-y-3'>
                    {/* here i can use another component */}
                    {bookMarks.map((bookMark, index) => <p className='text-center bg-gray-100 py-2 mx-5 rounded-md' key={index}>{bookMark.title}</p>)}
                </div>
            </div>
        </div>
    )
}

BookMark.propTypes = {
    bookMarks: PropTypes.array.isRequired,
}

export default BookMark
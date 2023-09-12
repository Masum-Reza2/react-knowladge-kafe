import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMark from './components/Bookmarks/BookMark'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([])

  const handleBookMark = (data) => {
    // console.log(data)
    let newData = [...bookMarks, data]
    setBookMarks(newData);
  }

  return (
    <>

      <Header />
      <div className='flex p-4 mx-4 gap-5 justify-center'>
        <Blogs handleBookMark={handleBookMark} />
        <BookMark bookMarks={bookMarks} />
      </div>

    </>
  )
}

export default App

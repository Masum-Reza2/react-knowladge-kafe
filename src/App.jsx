import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMark from './components/Bookmarks/BookMark'
import Header from './components/Header/Header'

function App() {

  

  return (
    <>
      <Header />
      <div className='flex p-4 mx-4 gap-5 justify-center'>
        <Blogs/>
        <BookMark />
      </div>

    </>
  )
}

export default App

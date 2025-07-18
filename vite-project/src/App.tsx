
import { useState } from 'react'
import './App.css'
import { MainHeader } from './components/MainHeader'
import { PostList } from './components/PostList'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('here')
    setIsModalOpen(false)
  }

  return (
    <>
    <MainHeader onCreatePost={openModal}/>
      <PostList isModalOpen={isModalOpen} closeModal={closeModal}/>
    </>
  )
}

export default App

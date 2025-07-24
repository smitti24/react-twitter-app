
import { Outlet } from 'react-router-dom'
import { PostList } from '../components/PostList'

function Posts() {

  return (
    <>
    <Outlet />
    <PostList/>
    </>
  )
}

export default Posts
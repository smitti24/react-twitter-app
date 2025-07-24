import { lazy } from 'react'
import {type RouteObject } from 'react-router-dom'
import { RouterLayout } from './RouterLayout'

// Lazy load components for better performance
const Posts = lazy(() => import('../pages/Posts'))
const NewPost = lazy(() => import('../pages/NewPost'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RouterLayout />,
    children: [
      { path: '/', element: <Posts />, children:[ { path: '/create-posts', element: <NewPost />}]},
     
    ]
  }
]
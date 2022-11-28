import { lazy } from 'react'

const DashBoard = lazy(() => import('.'));

export default [
  {
    path: '/',
    element: DashBoard
  }
]

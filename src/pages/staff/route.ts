import { lazy } from 'react'

const StaffPage = lazy(() => import('.'));

export default [
  {
    path: '/staff',
    element: StaffPage
  }
]

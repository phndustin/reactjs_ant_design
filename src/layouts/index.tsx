import { Outlet } from 'react-router-dom'
import BaseLayout from 'layouts/base-layout'

export default function Layout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}

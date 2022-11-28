import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from 'layouts'
import routes from './routes'

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(item =>
              <Route path={item.path} element={<item.element />} />
            )}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

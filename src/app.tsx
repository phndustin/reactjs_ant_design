import { useState, useEffect } from 'react'
import { RootStore, RootStoreProvider, setupRootStore } from './models'
import Router from './router'

function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore)
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) return null

  return (
    <RootStoreProvider value={rootStore}>
      <Router />
    </RootStoreProvider>
  )
}

export default App
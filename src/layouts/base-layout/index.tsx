import PrimaryLayout from 'layouts/primary-layout'
import { Loader } from 'components'

function BaseLayout(props: any) {
  const { children } = props
  // TODO: load layout from pathname
  const Container = PrimaryLayout

  // const Container = LayoutMap[queryLayout(config.layouts, location.pathname)]

  // const currentPath = location.pathname + location.search
  // if (currentPath !== this.previousPath) {
  //   NProgress.start()
  // }

  // if (!loading.global) {
  //   NProgress.done()
  //   this.previousPath = currentPath
  // }

  return (
    <>
      <Loader fullScreen spinning={false} />
      <Container>{children}</Container>
    </>
  )
}

export default BaseLayout
import classNames from 'classnames'
import Loader from 'components/loader'
import './style.scss'

function Page(props: any) {
  const { className, children, loading = false, inner = false } = props
  const loadingStyle = {
    height: 'calc(100vh - 184px)',
    overflow: 'hidden',
  }

  return (
    <div
      className={classNames('page', className, {
        ['content-inner']: inner,
      })}
      style={loading ? loadingStyle : undefined}
    >
      {loading ? <Loader spinning /> : undefined}
      {children}
    </div>
  )
}

export default Page
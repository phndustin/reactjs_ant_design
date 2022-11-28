import classNames from 'classnames'
import './style.scss'

const Loader = ({ spinning = false, fullScreen = false }) => {
  return (
    <div
      className={classNames('loader', {
        hidden: !spinning,
        fullScreen: fullScreen,
      })}
    >
      <div className="warpper">
        <div className="inner" />
        <div className="text">LOADING</div>
      </div>
    </div>
  )
}

export default Loader
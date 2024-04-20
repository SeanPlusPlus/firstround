import _get from 'lodash/get'

const LoadingSpinner = (props) => {
  const stroke = _get(props, 'stroke', '#000')
  const height = _get(props, 'height', '50')

  return (
    <div className="loading-spinner">
      <svg
        className="spinner"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height={height}
        viewBox="0 0 50 50"
      >
        <circle
          className="spinner-path"
          cx="25"
          cy="25"
          r="20"
          fill="transparent"
          strokeWidth="4"
          stroke={stroke}
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default LoadingSpinner

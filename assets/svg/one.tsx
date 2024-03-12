import { memo } from "react"

const Icon = memo(() => {
  return (
    <div className="icon-wrapper">
      <svg
        width="30"
        height="8"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.97168 1L6.20532 6L11.439 1"
          stroke="#AEAEAE"
          strokeWidth="2"
        ></path>
      </svg>
    </div>
  )
})

export default Icon

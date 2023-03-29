const PlayIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="65" height="70" viewBox="0 0 65 70"
    {...props}>

    <path
      d="M5 5V65L60 35L5 5Z"
      fill="none"
      stroke="white" 
      strokeWidth="10" 
      strokeLinejoin="round"
      className="icon__play__triangle-inner" />

    <path
      d="M5 5V65L60 35L5 5Z"
      fill="none"
      stroke="white" 
      strokeWidth="10" 
      strokeLinejoin="round"
      className="icon__play__triangle-outer" />

  </svg>
)

export default PlayIcon

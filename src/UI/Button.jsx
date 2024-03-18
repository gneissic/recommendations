import { Link } from "react-router-dom"


const Button = (props) => {
  return (
    <Link to="/recomend">
        <button className={props.className}>
          Check it Out
        </button>
    </Link>
  )
}

export default Button
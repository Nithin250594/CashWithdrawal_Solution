// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, id, decrementValue} = props

  const denominationDecrement = () => {
    decrementValue(id)
  }

  return (
    <li className="list-buttons">
      <button
        type="button"
        className="button-style"
        onClick={denominationDecrement}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

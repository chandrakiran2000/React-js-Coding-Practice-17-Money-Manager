// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachList, handleTransactionHistory} = props
  const {id, title, amount, type} = eachList
  const deleteButtonHandling = () => {
    handleTransactionHistory(id)
  }
  return (
    <li className="history-item-card">
      <p className="history-title-text">{title}</p>
      <p className="history-amount-text">Rs {amount}</p>
      <p className="history-type-text">{type}</p>
      <button
        data-testid="delete"
        onClick={deleteButtonHandling}
        className="delete-btn"
        type="button"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem

// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-card">
      <div className="your-balance-card">
        <img
          className="your-balance-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balance-card">
          <p className="balance-text">Your Balance</p>
          <p data-testid="balanceAmount" className="balance-numbers">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="your-income-card">
        <img
          className="your-balance-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="balance-card">
          <p className="balance-text">Your Income</p>
          <p data-testid="incomeAmount" className="balance-numbers">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="your-expenses-card">
        <img
          className="your-balance-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="balance-card">
          <p className="balance-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance-numbers">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

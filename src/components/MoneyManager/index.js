import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    inputTitle: '',
    inputAmount: '',
    inputType: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
    transactionList: [],
  }

  handleInputTitle = event => {
    //  console.log(event.target.value)
    this.setState({inputTitle: event.target.value})
  }

  handleInputAmount = event => {
    //  console.log(typeof parseInt(event.target.value))
    this.setState({inputAmount: parseInt(event.target.value)})
  }

  handleInputType = event => {
    //  console.log(event.target.value)
    transactionTypeOptions.map(each => {
      if (each.optionId === event.target.value) {
        this.setState({inputType: each.displayText})
      }
      return null
    })
    //  this.setState({inputType: event.target.value})   this.setState({inputType: each.displayText})
  }

  handleForm = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, inputType} = this.state
    const newList = {
      id: uuidv4(),
      title: inputTitle,
      amount: inputAmount,
      type: inputType,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newList],

      balance:
        inputType === 'Income'
          ? prevState.balance + inputAmount
          : prevState.balance - inputAmount,

      income:
        inputType === 'Income'
          ? prevState.income + inputAmount
          : prevState.income,

      expenses:
        inputType === 'Expenses'
          ? prevState.expenses + inputAmount
          : prevState.expenses,

      inputTitle: '',

      inputAmount: '',
    }))
  }

  handleTransactionHistory = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))

    const {transactionList} = this.state
    const f = transactionList.find(each => each.id === id)
    console.log(f)
    //  const {type, id, amount} = f
    if (f.type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses - f.amount,
        balance: prevState.balance + f.amount,
        transactionList: prevState.transactionList.filter(
          each => each.id !== f.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        income: prevState.income - f.amount,
        balance: prevState.balance - f.amount,
      }))
    }
  }

  /* else if (f.type === 'Income'){
        this.setState(prevState => ({
          income: prevState.income - f.amount,
        })),
    } */

  render() {
    const {
      inputTitle,
      inputAmount,
      balance,
      income,
      expenses,
      transactionList,
    } = this.state
    //  console.log(transactionList)
    return (
      <div className="bg-card">
        <div className="money-manager-card">
          <div className="name-card">
            <h1 className="name-heading">Hi, Richard</h1>
            <p className="description-para">
              Welcome back to your
              <span className="description-span"> Money Manager</span>
            </p>
          </div>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="add-transaction-history-card">
          <div className="add-transaction-card">
            <div className="add-card">
              <h1 className="add-heading">Add Transaction</h1>
              <form className="input-form-card" onSubmit={this.handleForm}>
                <label className="label-title" htmlFor="atitle">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  onChange={this.handleInputTitle}
                  value={inputTitle}
                  className="input-title"
                  id="atitle"
                  placeholder="TITLE"
                />
                <br />

                <label className="label-amount" htmlFor="a-amount">
                  AMOUNT
                </label>
                <br />
                <input
                  type="text"
                  onChange={this.handleInputAmount}
                  value={inputAmount}
                  className="input-amount"
                  id="a-amount"
                  placeholder="AMOUNT"
                />
                <br />

                <label className="label-transaction" htmlFor="transactions">
                  TYPE
                </label>
                <br />
                <select
                  onChange={this.handleInputType}
                  id="transactions"
                  className="transaction-type"
                >
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <br />

                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="history-card">
            <div>
              <h1 className="history-heading">History</h1>
              <div className="history-type-card">
                <p className="history-title">Title</p>
                <p className="history-amount">Amount</p>
                <p className="history-type">Type</p>
              </div>
              <ul className="transaction-history-card">
                {transactionList.map(each => (
                  <TransactionItem
                    eachList={each}
                    key={each.id}
                    handleTransactionHistory={this.handleTransactionHistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

//  ccbp publish RJSCPIK4G2 moneymbyack.ccbp.tech
